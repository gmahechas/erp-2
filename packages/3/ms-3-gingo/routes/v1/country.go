package routes

import (
	ginGo "github.com/gmahechas/erp-common-gin-go/utils"
)

func InitCountryRoutes(router *ginGo.GinRouterGroup) {
	routes := router.Group("/country")
	{
		routes.GET("/create/one", ginGo.GinHandlerFunc(createOneCountry))
		routes.GET("/update/one", ginGo.GinHandlerFunc(updateOneCountry))
		routes.GET("/delete/one", ginGo.GinHandlerFunc(deleteOneCountry))
		routes.GET("/search/one", ginGo.GinHandlerFunc(searchOneCountry))
		routes.GET("/search/many", ginGo.GinHandlerFunc(searchManyCountry))
	}
}

func createOneCountry(context *ginGo.GinContext) {
	context.String(200, "createOneCountry !!!")
}

func updateOneCountry(context *ginGo.GinContext) {
	context.String(200, "updateOneCountry !!!")
}

func deleteOneCountry(context *ginGo.GinContext) {
	context.String(200, "deleteOneCountry !!!")
}

func searchOneCountry(context *ginGo.GinContext) {
	context.String(200, "searchOneCountry !!!")
}

func searchManyCountry(context *ginGo.GinContext) {
	context.String(200, "searchManyCountry !!!")
}
