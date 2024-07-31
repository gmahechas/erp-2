package utils

import (
	"github.com/gin-gonic/gin"
)

/* ************ Server ************ */
type GinServer struct {
	Router *gin.Engine
}

func NewGinServer() *GinServer {
	return &GinServer{Router: gin.New()}
}

func (server *GinServer) Run(address string) error {
	return (*server).Router.Run(address)
}

/* ************ Context ************ */
type GinContext struct {
	*gin.Context
}

func NewGinContext(context *gin.Context) GinContext {
	return GinContext{context}
}

/* ************ RouterGroup ************ */
type GinRouterGroup struct {
	*gin.RouterGroup
}

func NewGinRouterGroup(routes *gin.RouterGroup) *GinRouterGroup {
	return &GinRouterGroup{RouterGroup: routes}
}

/* ************ HandlerFunc ************ */
func GinHandlerFunc(handler func(*GinContext)) func(context *gin.Context) {
	return func(context *gin.Context) {
		customContext := NewGinContext(context)
		handler(&customContext)
	}
}
