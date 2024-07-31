package routes

import (
	ginGoMiddlewares "github.com/gmahechas/erp-common-gin-go/middlewares"
	ginGoUtils "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitCountryRoutes(router *ginGoUtils.GinRouterGroup) {
	routes := router.Group("/country")
	{
		routes.GET("/create/one", ginGoMiddlewares.AuthenticationMiddleware(), ginGoMiddlewares.AuthorizationMiddleware(), ginGoMiddlewares.ValidatorMiddleware(), ginGoUtils.GinHandlerFunc(createOneCountry))
		routes.GET("/update/one", ginGoUtils.GinHandlerFunc(updateOneCountry))
		routes.GET("/delete/one", ginGoUtils.GinHandlerFunc(deleteOneCountry))
		routes.GET("/search/one", ginGoUtils.GinHandlerFunc(searchOneCountry))
		routes.GET("/search/many", ginGoUtils.GinHandlerFunc(searchManyCountry))
	}
}

func createOneCountry(context *ginGoUtils.GinContext) {
	context.String(200, "createOneCountry !!!")
}

func updateOneCountry(context *ginGoUtils.GinContext) {
	context.String(200, "updateOneCountry !!!")
}

func deleteOneCountry(context *ginGoUtils.GinContext) {
	context.String(200, "deleteOneCountry !!!")
}

func searchOneCountry(context *ginGoUtils.GinContext) {
	context.String(200, "searchOneCountry !!!")
}

func searchManyCountry(context *ginGoUtils.GinContext) {
	context.String(200, "searchManyCountry !!!")
}
