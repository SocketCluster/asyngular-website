/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          <div className="wrapper homeWrapper">{props.children}</div>
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle siteConfig={siteConfig} />
          <PromoSection>
            <Button href={docUrl('getting-started.html')}>Get started</Button>
            <Button
              href="https://gitter.im/SocketCluster/asyngular"
              target="_blank"
              rel="noreferrer noopener"
            >Chat on Gitter</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const BlockWithHeading = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <h1 class="blockHeading" align="center">{props.heading}</h1>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );

    const Features = () => (
      <Block layout="fourColumn">
        {[
          {
            content: 'Pub/sub channels are extremely cheap. You can have millions of unique channels without worrying about memory or CPU usage.',
            image: `${baseUrl}img/icons/unlimited-channels.png`,
            imageAlign: 'top',
            title: 'Handle unlimited channels',
          },
          {
            content: 'The asyngular CLI tool exposes some kubectl (Kubernetes) shortcut commands to make deploying your app to any Kubernetes cluster really fast easy. All Kubernetes .yaml files are in your app\'s kubernetes/ directory.',
            image: `${baseUrl}img/icons/deploy-containers.png`,
            imageAlign: 'top',
            title: 'Deploy easily',
          },
          {
            content: 'After depoying your app to a Kubernetes cluster. You can scale indefinitely by using the `kubectl scale deployment` command to add more agc-worker and agc-broker instances as needed.',
            image: `${baseUrl}img/icons/scale.png`,
            imageAlign: 'top',
            title: 'Scale easily',
          },
          {
            content: 'You can perform asynchronous operations anywhere along a socket\'s inbound or outbound stream without any risk of disrupting the message order.',
            image: `${baseUrl}img/icons/delivery-order.png`,
            imageAlign: 'top',
            title: 'Guarantee delivery order',
          },
          {
            content: 'Awaiting for asynchronous actions along a socket\'s inbound or outbout streams can cause messages to pile up. This can be easily monitored on the back end using `socket.inboundBackpressure` and `socket.outboundBackpressure`.',
            image: `${baseUrl}img/icons/pressure.png`,
            imageAlign: 'top',
            title: 'Monitor message backpressure',
          },
          {
            content: 'Asyngular supports JWT authentication. This form of authentication is ideal for WebSockets because the token expiry can be made arbitrarily short and renewed often on an interval for very little performance cost while saving many database lookups.',
            image: `${baseUrl}img/icons/authentication.png`,
            imageAlign: 'top',
            title: 'Support efficient authentication',
          },
          {
            content: 'Middleware streams allow you to block socket connections using the `MIDDLEWARE_HANDSHAKE` line and block individual socket actions using the `MIDDLEWARE_INBOUND` and `MIDDLEWARE_OUTBOUND` lines.',
            image: `${baseUrl}img/icons/police-access-control.png`,
            imageAlign: 'top',
            title: 'Enforce access control using middleware streams',
          },
          {
            content: 'Every data packet which is received or is about to be sent out to a client socket can be delayed or transformed using `MIDDLEWARE_INBOUND_RAW`, `MIDDLEWARE_INBOUND` or `MIDDLEWARE_OUTBOUND` lines.',
            image: `${baseUrl}img/icons/breaks-throttle.png`,
            imageAlign: 'top',
            title: 'Throttle and transform data using middleware streams',
          },
          {
            content: 'Data and events can be consumed using async loops (e.g. `for-await-of` loops). Event listener callbacks are no longer supported; this solves many problems related to code readability.',
            image: `${baseUrl}img/icons/tangled-hell.png`,
            imageAlign: 'top',
            title: 'Avoid callback hell',
          },
          {
            content: 'Clients are optimized to handle lost connections seamlessly. For example, if a client socket loses the connection, channels attached to that socket will be put in a `pending` state and automatically resubscribe after the socket reconnects .',
            image: `${baseUrl}img/icons/recover.png`,
            imageAlign: 'top',
            title: 'Recover from failure',
          },
          {
            content: 'Without callbacks, asynchronous serial logic can always be executed from the top down. This makes it more obvious which parts of the code are serial and which parts are parallel and it encourages a more declarative style of programming.',
            image: `${baseUrl}img/icons/declare-king.png`,
            imageAlign: 'top',
            title: 'Write declarative code',
          },
          {
            content: 'Sockets and channels do not need to be destroyed explicitly. They will be automatically marked for garbage collection as soon as they stop being used and are no longer referenced in the code.',
            image: `${baseUrl}img/icons/mem-leak-color.png`,
            imageAlign: 'top',
            title: 'Avoid memory leaks',
          },
        ]}
      </Block>
    );

    // const Showcase = () => {
    //   if ((siteConfig.users || []).length === 0) {
    //     return null;
    //   }
    //
    //   const showcase = siteConfig.users
    //     .filter(user => user.pinned)
    //     .map(user => (
    //       <a href={user.infoLink} key={user.infoLink}>
    //         <img src={user.image} alt={user.caption} title={user.caption} />
    //       </a>
    //     ));
    //
    //   const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;
    //
    //   return (
    //     <div className="productShowcaseSection paddingBottom">
    //       <h2>Who is Using This?</h2>
    //       <p>This project is used by all these people</p>
    //       <div className="logos">{showcase}</div>
    //       <div className="more-users">
    //         <a className="button" href="">
    //           More {siteConfig.title} Users
    //         </a>
    //       </div>
    //     </div>
    //   );
    // };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Features />
        </div>
      </div>
    );
  }
}

module.exports = Index;
