package main

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func main() {
	server := ginGo.NewGinServer()
	server.Run(":50003")
}
