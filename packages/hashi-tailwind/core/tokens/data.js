/*
 *
 *  Copyright (c) 2023 Dev Protocol
 *
 *  Permission is hereby granted, free of charge, to any person obtaining a copy
 *  of this software and associated documentation files (the "Software"), to deal
 *  in the Software without restriction, including without limitation the rights
 *  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 *  copies of the Software, and to permit persons to whom the Software is
 *  furnished to do so, subject to the following conditions:
 *
 *  The above copyright notice and this permission notice shall be included in all
 *  copies or substantial portions of the Software.
 *
 *  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 *  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 *  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 *  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 *  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 *  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 *  SOFTWARE.
 *
 */

const { toRem } = require('./methods');

const primitiveColorTokens = {
    'dp-black-alpha': {
        'default': 'rgba(0, 0, 0, .12)',
        'ink': 'rgba(0, 0, 0, .37)',
    },
    'dp-white-alpha': {
        'default': 'rgba(255, 255, 255, .12)',
        'ink': 'rgba(255, 255, 255, .37)',
    },
    'dp-white': {
        '200': '#ffffff',
        '300': '#f1f1f1',
        '400': '#d7d7d7',
        '600': '#c4c4c4',
        'ink': '#040b10',
    },
    'dp-black': {
        '200': '#383838',
        '300': '#272727',
        '400': '#171717',
        '600': '#000000',
        'ink': '#ffffff',
    },
    'dp-red': {
        '200': '#e45d5d',
        '300': '#df3737',
        '400': '#c92020',
        '600': '#920d0d',
        'ink': '#ffffff'
    },
    'scarlet': {
        '200': '#ff7860',
        '300': '#ff583a',
        '400': '#ff3815',
        '600': '#b71f04',
        'ink': '#ffffff',
    },
    'dp-orange': {
        '200': '#ffa040',
        '300': '#fd8835',
        '400': '#ff6a00',
        '600': '#c4570c',
        'ink': '#ffffff'
    },
    'dp-yellow': {
        '200': '#ffc751',
        '300': '#ffbb27',
        '400': '#fdad00',
        '600': '#ac7600',
        'ink': '#000000'
    },
    'dp-green': {
        '200': '#67cf72',
        '300': '#43c451',
        '400': '#30a83d',
        '600': '#197a23',
        'ink': '#ffffff'
    },
    'bright-cyan': {
        '200': '#51e0ff',
        '300': '#27d9ff',
        '400': '#00d0fd',
        '600': '#008dac',
        'ink': '#000000',
    },
    'native-blue': {
        '200': '#88aeff',
        '300': '#6d9bff',
        '400': '#5b8bf5',
        '600': '#315ab4',
        'ink': '#ffffff',
    },
    'dp-blue-grey': {
        '200': '#3a4158',
        '300': '#222b3d',
        '400': '#111827',
        '600': '#040b10',
        'ink': '#ffffff',
    },
    'hs-purple': {
        '200': '#c0a2ee',
        '300': '#a173e0',
        '400': '#6c30bd',
        '600': '#3b1570',
        'ink': '#ffffff',
    },
    'plox': {
        '200': '#eb48f8',
        '300': '#e71cf7',
        '400': '#d500e6',
        '600': '#91009c',
        'ink': '#ffffff',
    },
    'hana': {
        '200': '#ffb8d7',
        '300': '#ff77a9',
        '400': '#ec407a',
        '600': '#b4004e',
        'ink': '#ffffff'
    }
};

const primitiveShapeTokens = {
    'radius': {
        'none': 0,
        'xs': '0.1rem',
        'sm': '0.3rem',
        'md': '0.5rem',
        'lg': '0.7rem',
        'xl': '1.2rem',
        '2xl': '2.3rem',
        '3xl': '3.4rem',
        '4xl': '4.5rem',
        '5xl': '6.1rem',
        '6xl': '8.2rem',
        'pill': '5000px',
        'circle': '50%',
        // 'auto': 'n/a'
    },
    'spacing': {
        'none': 0,
        'xs': toRem(4),
        'sm': toRem(8),
        'md': toRem(16),
        'lg': toRem(24),
        'xl': toRem(32),
        '2xl': toRem(48),
        '3xl': toRem(64),
        '4xl': toRem(80),
        '5xl': toRem(96),
        '6xl': toRem(112),
        // 'pill': 'n/a',
        'auto': 'auto'
    },
    'el-spacing': {
        'none': 0,
        'xs': '0.1rem',
        'sm': '0.3rem',
        'md': '0.7rem',
        'lg': '1.2rem',
        'xl': '2.3rem',
        '2xl': '3.4rem',
        '3xl': '4.5rem',
        '4xl': '6.1rem',
        '5xl': '8.2rem',
        '6xl': '12.3rem',
        // 'pill': 'n/a',
        'auto': 'auto'
    },
    'dimension': {
        'none': 0,
        'xs': toRem(277),
        'sm': toRem(320),
        'md': toRem(640),
        'lg': toRem(890),
        'xl': toRem(1077),
        'sprite': toRem(32),
        'full': '100%',
    },
    'border': {
        'none': 0,
        'xs': '1px',
        'sm': '3px',
        'md': '5px',
        'lg': '7px',
        'xl': '11px',
        'auto': 'auto',
    },
    'shadow': {
        'none': '0 1px 0 0 var(--hs-shadow-color))',
        'low': '0 3px 4px 1px var(--hs-shadow-color))',
        'normal': '0 6px 10px 2px var(--hs-shadow-color))',
        'high': '0 10px 15px 3px var(--hs-shadow-color))',
        'highest': '0 15px 20px 4px var(--hs-shadow-color))',
    },
};

const primitiveShapeTokenAliases = {
    'padding': primitiveShapeTokens['el-spacing'],
    'margin': primitiveShapeTokens['spacing'],
    'width': primitiveShapeTokens['dimension'],
    'height': primitiveShapeTokens['dimension'],
    'gap': primitiveShapeTokens['spacing'],
};

const primitiveTypographyTokens = {
    'family': {
        'header': {
            'sans': '"Syne", sans-serif',
            'serif': '"Playfair Display", serif',
            'mono': '"IBM Plex Mono", monospace',
        },
        'sans': '"DM Sans", sans-serif',
        'serif': '"Playfair Display", serif',
        'mono': '"IBM Plex Mono", monospace',
    },
    'size': {
        'xs': `clamp(${toRem(10)}, 2vw, ${toRem(12)})`,
        'sm': `clamp(${toRem(14)}, 4vw, ${toRem(16)})`,
        'md': `clamp(${toRem(17)}, 5vw, ${toRem(21)})`,
        'lg': `clamp(${toRem(19)}, 6vw, ${toRem(25)})`,
        'xl': `clamp(${toRem(24)}, 8vw, ${toRem(30)})`,
        '2xl': `clamp(${toRem(26)}, 8vw, ${toRem(36)})`,
        '3xl': `clamp(${toRem(32)}, 10vw, ${toRem(42)})`,
        '4xl': `clamp(${toRem(39)}, 10vw, ${toRem(49)})`,
        '5xl': `clamp(${toRem(47)}, 12vw, ${toRem(57)})`,
        '6xl': `clamp(${toRem(56)}, 14vw, ${toRem(66)})`,
    },
    'weight': {
        'black': 900,
        'bold': 700,
        'normal': 400,
        'light': 300
    },
    'line-height': {
        'broad': 1.75,
        'normal': 1.5,
        'condensed': 1.25
    }
};

module.exports = {
    primitiveTokens: {
        ...primitiveColorTokens,
        ...primitiveShapeTokens,
        ...primitiveShapeTokenAliases,
        ...primitiveTypographyTokens
    }
};