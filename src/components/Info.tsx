import * as React from 'react';
import { InteractiveLink } from '../ui/InteractiveLink';
import { P } from '../ui/Paragraph';
import { styled } from '../stitches.config';

const LinkContainer = styled('span', {
  display: 'block',
  margin: '8px 0',
});

const PlatsLink: React.VFC = () => (
  <LinkContainer>
    <InteractiveLink href="/info/plats">Plats</InteractiveLink>
  </LinkContainer>
);

const KladerLink: React.VFC = () => (
  <LinkContainer>
    <InteractiveLink href="/info/kladsel">Klädsel</InteractiveLink>
  </LinkContainer>
);

const BoendeLink: React.VFC = () => (
  <LinkContainer>
    <InteractiveLink href="/info/boende">Boende?</InteractiveLink>
  </LinkContainer>
);

export const Info: React.VFC = () => (
  <div>
    <P>Info!</P>
    <P>
      <PlatsLink />
      <KladerLink />
      <BoendeLink />
    </P>
  </div>
);