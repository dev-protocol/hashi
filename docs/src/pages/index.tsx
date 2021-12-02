import React from 'react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

import '../scss/main.scss';
import HSCard from "@site/src/components/HSCard";
import HSHero from "@site/src/components/HSHero";
import HSButton from "@site/src/components/HSButton";


export default function Home(): JSX.Element {
    return (
        <Layout
            title={ `` }
            description="Description will go into a meta tag in <head />">
            <HSHero />
            <main className="content-wrap">
                <h1>Aims</h1>
                <section className="grid">
                    <HSCard title="Consistency">Bring a unified user experience when using Dev Protocol products.</HSCard>
                    <HSCard title="Beauty">Present an elegant user interface for consumers to look on.</HSCard>
                    <HSCard title="Framework Agnostic">Be able to create the same user interfaces regardless of any frontend framework.</HSCard>
                </section>
                <section className="absolute-center">
                    <HSButton type="filled" color="scarlet" link="/docs/getting-started/introduction">Ready to bridge?</HSButton>
                </section>
            </main>
        </Layout>
    );
}
