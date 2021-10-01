// ## ACCOUNTS USING mnemonic ##
const { mkAccounts, algodCredentialsFromEnv } = require('@algo-builder/algob');
let accounts = mkAccounts([
  {
    name: 'master-account',
    // This account is created using `make setup-master-account` command from our
    // `/infrastructure` directory.
    // It is used in all our examples to setup and fund other accounts (so it must posses ALGOs).
    // If you don't want an account with this address (can check that by running
    // `goal account list -d $ALGORAND_DATA`) then change it to other account you control.
    addr: 'WWYNX3TKQYVEREVSW6QQP3SXSFOCE3SKUSEIVJ7YAGUPEACNI5UGI4DZCE',
    // To export a mnemonic you may use the following command:
    // goal account export -a "your_account_address" -d $ALGORAND_DATA
    mnemonic:
      'enforce drive foster uniform cradle tired win arrow wasp melt cattle chronic sport dinosaur announce shell correct shed amused dismiss mother jazz task above hospital',
  },
  // Following accounts are generated using `algob gen-accounts`.
  {
    name: 'elon',
    addr: 'WHVQXVVCQAD7WX3HHFKNVUL3MOANX3BYXXMEEJEJWOZNRXJNTN7LTNPSTY',
    mnemonic:
      'resist derive table space jealous person pink ankle hint venture manual spawn move harbor flip cigar copy throw swap night series hybrid chest absent art',
  },
  {
    name: 'john',
    addr: '2UBZKFR6RCZL7R24ZG327VKPTPJUPFM6WTG7PJG2ZJLU234F5RGXFLTAKA',
    mnemonic:
      'found empower message suit siege arrive dad reform museum cake evoke broom comfort fluid flower wheat gasp baby auction tuna sick case camera about flip',
  },
  {
    name: 'alice',
    addr: 'EDXG4GGBEHFLNX6A7FGT3F6Z3TQGIU6WVVJNOXGYLVNTLWDOCEJJ35LWJY',
    mnemonic:
      'brand globe reason guess allow wear roof leisure season coin own pen duck worth virus silk jazz pitch behave jazz leisure pave unveil absorb kick',
  },
  {
    name: 'bob',
    addr: '2ILRL5YU3FZ4JDQZQVXEZUYKEWF7IEIGRRCPCMI36VKSGDMAS6FHSBXZDQ',
    mnemonic:
      'caution fuel omit buzz six unique method kiwi twist afraid monitor song leader mask bachelor siege what shiver fringe else mass hero deposit absorb tooth',
  },
]);

let defaultCfg = {
  host: 'http://localhost',
  port: 4001,
  // Below is a token created through our script in `/infrastructure`
  // If you use other setup, update it accordignly (eg content of algorand-node-data/algod.token)
  token: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
  accounts: accounts,
  // if you want to load accounts from KMD, you need to add the kmdCfg object. Please read
  // algob-config.md documentation for details.
  // kmdCfg: kmdCfg,
};

module.exports = {
  networks: {
    default: defaultCfg,
  },
};
