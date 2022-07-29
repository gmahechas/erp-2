package routes

import (
	"ms-3-gingo/middlewares"
	"net/http"

	"github.com/gin-gonic/gin"
)

func InitCountryRoutes(router *gin.RouterGroup) {
	routes := router.Group("/country")
	{
		routes.GET("/create/one", middlewares.AuthenticationMiddleware(), middlewares.AuthorizationMiddleware(), middlewares.ValidatorMiddleware(), createOneCountry)
	}
}

func createOneCountry(context *gin.Context) {
	context.String(http.StatusOK, "Hello country")
}
