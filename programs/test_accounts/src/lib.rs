use anchor_lang::prelude::*;

declare_id!("Fg6PaFpoGXkYsidMpWTK6W2BeZ7FEfcYkg476zPFsLnS");

#[program]
pub mod test_accounts {
    use super::*;

    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        if ctx.accounts.test_account.init == 0 {
            msg!("Set Test Account Params");
            let test_account = &mut ctx.accounts.test_account;
            test_account.init = 0xCC;
            test_account.owner = ctx.accounts.owner.key();
            test_account.test = Some(0x55);
        }

        {
            msg!("Toggle Option");
            let test_account = &mut ctx.accounts.test_account;
            if test_account.test.is_some() {
                test_account.test = None;
            } else {
                test_account.test = Some(0x55);
            }
        }

        {
            msg!("Print Account");
            let account_info = ctx.accounts.test_account.to_account_info();
            let data = account_info.data.borrow();

            msg!("{:02X?}", data)
        }

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(
        init_if_needed,
        payer = owner,
        space = get_test_size(),
    )]
    test_account: Account<'info, TestAccount>,

    // --------- Programs ----------
    system_program: Program<'info, System>,
    #[account(mut)]
    owner: Signer<'info>,
}

#[account]
pub struct TestAccount {
    init: u8,
    owner: Pubkey,
    test: Option<u8>,
}
pub fn get_test_size() -> usize {
    return 8 + // Account
        1 + // init
        32 + // Owner
        2;
}
