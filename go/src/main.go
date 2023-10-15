package main

import (
	"benchmark-go/src/config"
	"benchmark-go/src/database"
	"benchmark-go/src/routes"
	"log"

	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/logger"
)

func main() {
	app := fiber.New()

	app.Use(logger.New(logger.Config{
		Format: "[${time}] ${ip}  ${status} - ${latency} ${method} ${path}\n",
	}))

	Start()
	defer Stop()

	routes.Main(app)

	log.Fatal(app.Listen(":3333"))
}

func Start() {
	config.Load()
	database.Connect()
}
func Stop() {
	database.Disconnect()
}
