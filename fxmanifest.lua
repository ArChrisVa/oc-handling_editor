fx_version "cerulean"

description "A Vehicle Handling Editor for FiveM"
author "ArChrisVa"
version '1.0.0'
repository ''

lua54 'yes'

games {
  "gta5",
  "rdr3"
}

ui_page 'web/build/index.html'

client_script "client/**/*"
server_script "server/**/*"

files {
	'web/build/index.html',
	'web/build/**/*',
}