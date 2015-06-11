BIN := ./node_modules/.bin
DUO := $(BIN)/duo

SRC := ./*.js

build: build/index.js

build/index.js: $(SRC)
	@$(DUO) --standalone=detectFont index.js

clean:
	@-rm -rf build
