import path from 'path'
import util from 'util';

interface IBindings {
    p1_launch_server: () => string
    p1_ecdsa_get_child_share: (masterKeyShare: string, x: string, y: string) => string
    p2_ecdsa_generate_master_key: (endpoint: string, callback: (err: Error|null, result: string) => void) => void
    p2_ecdsa_get_child_share: (masterKeyShare: string, x: string, y: string) => string
    p2_ecdsa_sign: (endpoint: string, msgHash: string, share: string, x: string, y: string, callback: (err: Error|null, result: string) => void) => void;
    p2_schnorr_generate_key: (endpoint: string, callback: (err: Error|null, result: string) => void) => void
    p2_schnorr_sign: (endpoint: string, msgHash: string, share: string, callback: (err: Error|null, result: string) => void) => void;
    p2_eddsa_generate_key: (endpoint: string, callback: (err: Error|null, result: string) => void) => void
    p2_eddsa_sign: (endpoint: string, msgHash: string, keyPair: string, aggPubKey: string, id: string, callback: (err: Error|null, result: string) => void) => void;
}

const bindings: IBindings = require(path.join(__dirname, '../native'));

const bindingsPromisify = {
    ...bindings, 
    p2_ecdsa_generate_master_key_promisify: util.promisify(bindings.p2_ecdsa_generate_master_key),
    p2_ecdsa_sign_promisify: util.promisify(bindings.p2_ecdsa_sign),
    p2_schnorr_generate_key_promisify: util.promisify(bindings.p2_schnorr_generate_key),
    p2_schnorr_sign_promisify: util.promisify(bindings.p2_schnorr_sign),
    p2_eddsa_generate_key_promisify: util.promisify(bindings.p2_eddsa_generate_key),
    p2_eddsa_sign_promisify: util.promisify(bindings.p2_eddsa_sign),
};

export { bindingsPromisify as bindings };
