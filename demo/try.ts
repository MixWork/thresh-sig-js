import RocksDB from 'rocksdb';

const rocksdb = new RocksDB('./db');
rocksdb.open({ readOnly: true }, (err) => {
    if (err) {
        console.error('Catch error on open db.');
        console.error(err);
        process.exit(1);
    } else {
        rocksdb.batch()
        const masterKeyId = '111';
        const searchString = `pass_through_guest_user_${masterKeyId}_Party1MasterKey`;
        rocksdb.get(searchString, {asBuffer: false}, (err, value) => {
            if (err) {
                console.error('Catch error on get key. Key: %s', searchString);
                console.error(err);
                process.exit(1);
            } else {
                console.log('Result: %s', value);
            }
        })
    }
});