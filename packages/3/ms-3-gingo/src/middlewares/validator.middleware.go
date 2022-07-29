package middlewares

import (
	"fmt"

	"github.com/gin-gonic/gin"
)

func ValidatorMiddleware() gin.HandlerFunc {
	return func(context *gin.Context) {
		fmt.Println("Validator")
	}
}
