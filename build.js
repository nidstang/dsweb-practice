import StyleDictionary from "style-dictionary";
import { register } from '@tokens-studio/sd-transforms';
import ThemesLoader from "sd-themes-loader";

register(StyleDictionary, {
    withSDBuiltins: false,
});

// load
const loader = ThemesLoader(StyleDictionary);

// /src/main.css
async function main () {
    const holder = await loader.load("/tokens");

    const config = {
        platforms: {
            web: {
                files: [
                    {
                        destination: 'build/global/variables.css',
                        format: 'css/variables'
                    }
                ],

                transforms: [
                    'name/kebab',
                    'ts/resolveMath',
                    'size/pxToRem'
                ]
            },

            // android: {
            //     transforms: [
            //         'name/snake'
            //     ],
            //     files: [
            //         {
            //             destination: 'build/android/global/resources.xml',
            //             format: 'android/resources'
            //         }
            //     ]
            // }
        }
    };

    holder.getThemeByName('global').addConfig(config).build();
}

main();

// esto es un comentario
// string, number, boolean, object, array

// const name = "Pablo";

// const person = {
//     isAmazing: true,
//     name: "Pablo",
//     lastname: "Fernandez",
//     age: 32,
//     list: ["test", 2],
// }

// console.log(person);
// console.log(person.age);
// console.log(person.isAmazing);
// console.log(person.list);