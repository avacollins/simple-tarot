# This script renames all .js files in the current directory to .tsx files.
# Navigate to your target folder first, then:
for file in *.js; do mv "$file" "${file%.js}.tsx"; done