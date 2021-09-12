package main

import "flag"

var (
	caCertfile string
	caKeyfile  string
	serverPort string
)

func init() {
	flag.StringVar(&caCertfile, "cert", "~/.ex/cert.pem",
		"CA certificate filepath. Creates a new CA certificate if file doesn't exist")
	flag.StringVar(&caKeyfile, "key", "~/.ex/key.pem",
		"CA private key filepath. Creates a new CA private key if file doesn't exist")
	flag.StringVar(&serverPort, "port", "8080", "TCP address to listen on, in the form \"host:port\"")
	flag.Parse()
}

func main() {

}
