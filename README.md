# sim-mp
# cs ssh

fatal: unable to access 'https://github.com/siyuiot/sim-mp.git/': OpenSSL SSL_read: Connection was reset, errno 10054
git config http.sslVerify "false"

fatal: unable to access 'https://github.com/siyuiot/sim-mp.git/': Failed to connect to github.com port 443 after 21045 ms: Timed out
git config https.proxy
git config --unset https.proxy