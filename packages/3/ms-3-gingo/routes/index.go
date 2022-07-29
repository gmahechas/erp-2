package routes

import (
	v1 "ms-3-gingo/routes/v1"

	"github.com/gin-gonic/gin"
)

func InitRoutes(app *gin.Engine) {
	rest := app.Group("/rest")
	{
		v1.InitRoutesV1(rest)
	}
}
