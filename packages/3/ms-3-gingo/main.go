package main

import (
	"fmt"
	"ms-3-gingo/src/environments"
	"ms-3-gingo/src/routes"

	"github.com/gin-gonic/gin"
)

var config = map[string]interface{}{
	"environment": "development",
}

func main() {
	app := gin.New()
	environments.InitEnv()
	routes.InitRoutes(app)
	fmt.Println(`ms-3 is runnig on: http://localhost:50003`)
	app.Run("localhost:50003")
}
