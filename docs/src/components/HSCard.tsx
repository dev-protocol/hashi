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

import React from 'react';
import useBaseUrl from "@docusaurus/useBaseUrl";

interface HSCardProps {
    title: string;
    description?: string;
    media?: string;
    mediaAlt?: string;
    children?: React.ReactNode;
}

const HSCard: React.FC<HSCardProps> = ({ title, description, media, mediaAlt, children }) => {
    return (
        <div className="hs-card is-filled is-raised">
            <div>
              <section className="hs-card__media">
                <img src={useBaseUrl(`/img/${media}`)} alt={mediaAlt}/>
              </section>
              <header className="hs-card__header">
                <div className="hs-card__mast">
                  <h2 className="hs-card__title">{ title }</h2>
                  { description &&
                    <p className="hs-card__subtitle">{ description }</p>
                  }
                </div>
              </header>
              <div/>
            </div>
            <footer className="hs-card__footer">
              { children }
            </footer>
        </div>
    );
};

export default HSCard;