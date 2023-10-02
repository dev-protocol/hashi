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
          <h3>Experiences powered by Hashi</h3>
          <section className="grid">
            <HSCard title="Niwa" description="The Social Token Launcher for DAOs." media="index/niwa.png">
              <HSButton type="filled" color="scarlet" link="https://niwa.xyz">Visit website</HSButton>
            </HSCard>
            <HSCard title="Dev Protocol" description="Dev Protocol builds DAOs fast and allow them to connect and grow with each other. All-in-one, common incentives and hassle-free." media="index/dev-protocol.png">
              <HSButton type="filled" color="scarlet" link="https://devprotocol.xyz">Visit website</HSButton>
            </HSCard>
            <HSCard title="Clubs" description="Clubs is a new Web3 platform for creators and brands to easily start DAOs, with fascinating membership and monetization features." media="index/clubs.png">
              <HSButton type="filled" color="scarlet" link="https://clubs.place">Visit website</HSButton>
            </HSCard>
          </section>
          <section className="absolute-center">
            <HSButton type="filled large" color="scarlet" link="/docs/design">Ready to bridge?</HSButton>
          </section>
        </main>
      </Layout>
    </>
  );
}
