/*
 *  Copyright (c) 2022 Dev Protocol
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
 */

import React from 'react';
import Layout from '@theme/Layout';

import '../scss/main.scss';
import HSCard from '@site/src/components/HSCard';
import HSHero from '@site/src/components/HSHero';
import HSButton from '@site/src/components/HSButton';


export default function Home(): JSX.Element {
  return (
    <>
      <Layout
        title={ `` }
        description="Dev Protocol's design system for building bridges from software to user.">
        <HSHero />
        <main className="content-wrap">
          <h1>Aims</h1>
          <section className="grid">
            <HSCard title="Consistency" description="Bring a unified user experience when using Dev Protocol products." />
            <HSCard title="Beauty" description="Present an elegant user interface for consumers to look on." />
            <HSCard title="Framework Agnostic"
                    description="Be able to create the same user interfaces regardless of any frontend framework." />
          </section>
          <section className="absolute-center">
            <HSButton type="filled" color="scarlet" link="/docs/next/design">Ready to bridge?</HSButton>
          </section>
        </main>
      </Layout>
    </>
  );
}
