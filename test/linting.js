/**
 * This file can be used to test rules and the related --fix options.
 * If you run "--fix" pls do not commit it as linting errors are intended here.
 */

const titlehelperChannel = {};
const withoutLabels = [];
const resources = [];
const _ = {};


const arrowParaensAndarrowBodyStyle = () => titlehelperChannel
    .request({topic: 'get.titles', data: withoutLabels})
    .map(titles =>
        // add titles and sort items alphabetically
        _.chain(resources)
            .map(it => {
                if (it.label) {
                    return it;
                }

                const label =
                    titles[it.value] !== undefined
                        ? titles[it.value]
                        : it.value;

                return {...it, label};
            })
            .sortBy('label')
            .value()
    );


export default arrowParaensAndarrowBodyStyle;
