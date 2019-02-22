module.exports = {
    apps: [{
        name: 'empty-project',
        script: 'bin/www',
        output: "data/log/pm2_nova_out.log",
        error: "data/log/pm2_nova_error.log",
        log_date_format: "DD-MM-YYYY",
        exec_mode: "cluster",
        env: {
            NODE_ENV: 'production'
        }
    }]
};