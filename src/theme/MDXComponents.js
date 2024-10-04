import React from 'react';
// Importing the original mapper + our components according to the Docusaurus doc
import MDXComponents from '@theme-original/MDXComponents';
import Card from '/src/components/Card';
import CardBody from '/src/components/Card/CardBody';
import CardFooter from '/src/components/Card/CardFooter';
import CardHeader from '/src/components/Card/CardHeader';
import CardImage from '/src/components/Card/CardImage';

export default {
    // Reusing the default mapping
    ...MDXComponents,
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardImage,
};