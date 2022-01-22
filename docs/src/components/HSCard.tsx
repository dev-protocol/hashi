/*
 *
 *  Copyright (c) 2021 Dev Protocol
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

import React from 'react';

interface HSCardProps {
    title: string;
    description?: string;
    actions?: React.ReactElement | string;
}

const HSCard: React.FC<HSCardProps> = ({ title, description, actions, children }) => {
    return (
        <div className="hs-card">
            <div className="hs-card__header">
                <h2 className="hs-card__title">{ title }</h2>
                { description &&
                    <p className="hs-card__subtitle">{ description }</p>
                }
            </div>
            { children &&
            <div className="hs-card__content">
                { children }
            </div>
            }
            { actions &&
            <div className="hs-card__actions">
                { actions }
            </div>
            }
        </div>
    );
};

export default HSCard;