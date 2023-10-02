///
//  Copyright (c) 2023 Dev Protocol
//
//  Permission is hereby granted, free of charge, to any person obtaining a copy
//  of this software and associated documentation files (the "Software"), to deal
//  in the Software without restriction, including without limitation the rights
//  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
//  copies of the Software, and to permit persons to whom the Software is
//  furnished to do so, subject to the following conditions:
//
//  The above copyright notice and this permission notice shall be included in all
//  copies or substantial portions of the Software.
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
//  SOFTWARE.
///

// A5C261
// 75B0D2

import React from 'react';
import Link from '@docusaurus/Link';

interface HSButtonProps {
    type?: string;
    color?: string;
    label?: string;
    icon?: string;
    link?: string;
    isDisabled?: boolean;
    children?: React.ReactNode;
}

const HSButton: React.FC<HSButtonProps> = ({ type, color, label, icon, link, isDisabled, children }) => {
    const ButtonBase = (
        <button className={ `hs-button${ type ? ' is-' + type : '' }` } disabled={ isDisabled }>
            { icon && <i className="hs-button__icon">{ icon }</i> }
            <span className="hs-button__label">{ label || children }</span>
        </button>
    );

    if (!link) {
        return (
            <button className={ `hs-button${ type ? ' is-' + type : '' }` } disabled={ isDisabled }>
                { icon && <i className="hs-button__icon">{ icon }</i> }
                <span className="hs-button__label">{ label || children }</span>
            </button>
        );
    } else {
        const isLinkExternal: boolean = link.startsWith('http://') || link.startsWith('https://');
        return (
            <Link to={ link } target={ isLinkExternal ? '_blank' : '_self' } className={ `hs-button${ type ? ' is-' + type : '' }` }>
                { icon && <i className="hs-button__icon">{ icon }</i> }
                <span className="hs-button__label">{ label || children }</span>
            </Link>
        );
    }
};

export default HSButton;