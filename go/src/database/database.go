package database

import (
	"benchmark-go/src/config"
	"fmt"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

var Db *sqlx.DB

func Connect() {
	dataSource := config.StringDatabaseConnection

	fmt.Printf("Database connection: %s\n", dataSource)

	var err error

	Db, err = sqlx.Open("postgres", dataSource)

	if err != nil {
		panic(err.Error())
	}

	err = Db.Ping()

	if err != nil {
		panic(err.Error())
	} else {
		fmt.Println("Database connected!")
	}
}

func Disconnect() {
	if Db != nil {
		Db.Close()
		fmt.Println("Database disconnected!")
	} else {
		fmt.Println("Database not connected!")
	}
}
