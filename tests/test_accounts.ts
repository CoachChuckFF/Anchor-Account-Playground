import * as anchor from "@project-serum/anchor";
import { Program } from "@project-serum/anchor";
import { TestAccounts } from "../target/types/test_accounts";

function sleep(ms: number) {
    return new Promise((accept) => {
        setTimeout(accept, ms);
    });
}

describe("test_accounts", () => {
    // Configure the client to use the local cluster.
    const provider = anchor.AnchorProvider.env();
    anchor.setProvider(provider);

    const program = anchor.workspace.TestAccounts as Program<TestAccounts>;

    const testAccount = anchor.web3.Keypair.generate();

    beforeEach(async () => {
        await sleep(1000);
    });

    it("Call 1", async () => {
        // Add your test here.
        const tx = await program.methods
            .initialize()
            .accounts({
                systemProgram: anchor.web3.SystemProgram.programId,
                owner: provider.wallet.publicKey,
                testAccount: testAccount.publicKey,
            })
            .signers([testAccount])
            .rpc();
        console.log("Your transaction signature", tx);
    });

    it("Call 2", async () => {
        // Add your test here.
        const tx = await program.methods
            .initialize()
            .accounts({
                systemProgram: anchor.web3.SystemProgram.programId,
                owner: provider.wallet.publicKey,
                testAccount: testAccount.publicKey,
            })
            .signers([testAccount])
            .rpc();
        console.log("Your transaction signature", tx);
    });

    it("Call 3", async () => {
        // Add your test here.
        const tx = await program.methods
            .initialize()
            .accounts({
                systemProgram: anchor.web3.SystemProgram.programId,
                owner: provider.wallet.publicKey,
                testAccount: testAccount.publicKey,
            })
            .signers([testAccount])
            .rpc();
        console.log("Your transaction signature", tx);
    });

    it("Call 4", async () => {
        // Add your test here.
        const tx = await program.methods
            .initialize()
            .accounts({
                systemProgram: anchor.web3.SystemProgram.programId,
                owner: provider.wallet.publicKey,
                testAccount: testAccount.publicKey,
            })
            .signers([testAccount])
            .rpc();
        console.log("Your transaction signature", tx);
    });

    it("Call 5", async () => {
        // Add your test here.
        const tx = await program.methods
            .initialize()
            .accounts({
                systemProgram: anchor.web3.SystemProgram.programId,
                owner: provider.wallet.publicKey,
                testAccount: testAccount.publicKey,
            })
            .signers([testAccount])
            .rpc();
        console.log("Your transaction signature", tx);
    });
});
