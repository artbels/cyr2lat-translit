# cyr2lat-translit

A lightweight Cyrillic to Latin transliteration library for JavaScript.  
Ideal for generating slugs, URL-safe strings, or human-readable identifiers.

## Features

- Supports both Russian and Ukrainian Cyrillic
- Handles punctuation, numbers, and mixed strings
- Safe for filenames, URLs, and SEO-friendly outputs
- Small, fast, and dependency-free

## Install

npm install cyr2lat-translit

## Usage

const translit = require('cyr2lat-translit');

console.log(translit('Киев, Вузовская ул., 5')); 
// Output: 'kiev-vuzovskaya-ul-5'

## Example Cases
' Київ, Вузовская ул., 5 ' → 'kyiv-vuzovskaya-ul-5'


## API

translit(input: string | number): string | undefined

- Returns undefined for null, undefined, or empty input
- Automatically lowercases and sanitizes output


## License
BSD 3-Clause License

Copyright (c) ArtEm Bilodid
Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS “AS IS” AND ANY EXPRESS OR IMPLIED WARRANTIES ARE DISCLAIMED.

