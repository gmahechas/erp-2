package main

import (
	"fmt"
	"ms_3_golang/src/routes/v1"
	"net/http"
)

func main() {
	mux := http.NewServeMux()
	mux.Handle("/rest/v1/3/", http.StripPrefix("/rest/v1/3", routes.InitRoutesV1()))
	server := &http.Server{
		Addr:    ":50003",
		Handler: mux,
	}
	fmt.Println(`ms-3 is runnig on: http://localhost:50003`)
	server.ListenAndServe()
}
