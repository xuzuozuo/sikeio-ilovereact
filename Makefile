.PHONY: server
server:
	./node_modules/.bin/browser-sync start --server --files='index.html,bundle/app.css,js/app.js'

.PHONY: css
css:
	mkdir -p bundle
	./node_modules/.bin/postcss --watch --use autoprefixer --use postcss-import css/app.css --output bundle/app.css

.PHONY: clean
clean:
	rm -r clean
