export function resolve(specifier, context, defaultResolve) {
    // rewrite all imports that start with @my_workspace/ to be relative
    if (specifier.startsWith('@my_workspace/')) {
        specifier = specifier.replace('@my_workspace/', './');
    }

    // Let Node.js handle all other specifiers, such as package names
    return defaultResolve(specifier, context, defaultResolve);
}
