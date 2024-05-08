import { Metadata } from 'next';
import Iframe from 'react-iframe';

export const metadata: Metadata = { title: 'Music' };

export default function Page() {
  const samBanyaMusicCard = {
    backgroundColor: 'bg-carousel-1',
    bandName: 'Sam Banya',
    description: 'Solo band from 2023 onward',
    albumLinks: ['https://sambanya.bandcamp.com/album/lousy-cartographer'],
    albums: [
      {
        name: 'Lousy Cartographer',
        link: 'https://sambanya.bandcamp.com/album/lousy-cartographer',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=4078273497/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://sambanya.bandcamp.com/album/lousy-cartographer">Lousy Cartographer by Sam Banya</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=4078273497/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://sambanya.bandcamp.com/album/lousy-cartographer',
        iFrameTitle: 'Lousy Cartographer by Sam Banya',
      },
    ],
  };

  const jeeveSobsMusicCard = {
    backgroundColor: 'bg-carousel-2',
    bandName: 'JeeveSobs',
    description: 'Solo band from 2021 onward',
    albums: [
      {
        name: 'Breakpoints',
        link: 'https://jeevesobs.bandcamp.com/album/breakpoints',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1286581908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jeevesobs.bandcamp.com/album/breakpoints">Breakpoints by JeeveSobs</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=1286581908/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://jeevesobs.bandcamp.com/album/breakpoints',
        iFrameTitle: 'Breakpoints by JeeveSobs',
      },
      {
        name: 'Jagged Edges',
        link: 'https://jeevesobs.bandcamp.com/album/jagged-edges',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3316819573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://jeevesobs.bandcamp.com/album/jagged-edges">Jagged Edges by JeeveSobs</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=3316819573/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://jeevesobs.bandcamp.com/album/jagged-edges',
        iFrameTitle: 'Jagged Edges by JeeveSobs',
      },
    ],
  };

  const shibesMusicCard = {
    backgroundColor: 'bg-carousel-3',
    bandName: 'Shibes',
    description: 'Solo band from 2017 onward',
    albums: [
      {
        name: 'Perspectives',
        link: 'https://shibes.bandcamp.com/album/perspectives',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=263938089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/perspectives">Perspectives by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=263938089/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/perspectives',
        iFrameTitle: 'Perspectives by Shibes',
      },
      {
        name: 'Slopes',
        link: 'https://shibes.bandcamp.com/album/slopes',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=2645040145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/slopes">Slopes by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=2645040145/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/slopes',
        iFrameTitle: 'Slopes by Shibes',
      },
      {
        name: 'Loop City',
        link: 'https://shibes.bandcamp.com/album/loop-city',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=785683678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/loop-city">Loop City by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=785683678/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/loop-city',
        iFrameTitle: 'Loop City by Shibes',
      },
      {
        name: 'Meteors',
        link: 'https://shibes.bandcamp.com/album/meteors',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3717925517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/meteors">Meteors by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=3717925517/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/meteors',
        iFrameTitle: 'Meteors by Shibes',
      },
      {
        name: 'Character',
        link: 'https://shibes.bandcamp.com/album/character',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1649547256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/character">Character by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=1649547256/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/character',
        iFrameTitle: 'Character by Shibes',
      },
      {
        name: 'Enough',
        link: 'https://shibes.bandcamp.com/album/enough',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1299901123/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/enough">Enough by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=1299901123/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/enough',
        iFrameTitle: 'Enough by Shibes',
      },
      {
        name: 'Life Is Strange',
        link: 'https://shibes.bandcamp.com/album/life-is-strange',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=127094186/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/life-is-strange">Life Is Strange by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=127094186/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/life-is-strange',
        iFrameTitle: 'Life Is Strange by Shibes',
      },
      {
        name: 'Internal Fighting',
        link: 'https://shibes.bandcamp.com/album/internal-fighting',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=1517587758/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/internal-fighting">Internal Fighting by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=1517587758/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/internal-fighting',
        iFrameTitle: 'Internal Fighting by Shibes',
      },
      {
        name: 'Athletics',
        link: 'https://shibes.bandcamp.com/album/athletics',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3964567804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/athletics">Athletics by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=3964567804/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/athletics',
        iFrameTitle: 'Athletics by Shibes',
      },
      {
        name: 'Still Trying',
        link: 'https://shibes.bandcamp.com/album/still-trying',
        iFrame:
          '<iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3459013849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/still-trying">Still Trying by Shibes</a></iframe>',
        iFrameSrc:
          'https://bandcamp.com/EmbeddedPlayer/album=3459013849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/',
        iFrameHref: 'https://shibes.bandcamp.com/album/still-trying',
        iFrameTitle: 'Still Trying by Shibes',
      },
    ],
  };

  const dreamoMusicCard = {
    backgroundColor: 'bg-carousel-4',
    bandName: 'Dreamo',
    description: 'Two piece band from 2016 onward',
    albums: [
      {
        name: 'Dreamo: All Releases',
        link: 'https://soundcloud.com/the-bedside-morale/sets/dreamo-all-releases',
        iFrame:
          '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1402196998&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-bedside-morale" title="The Bedside Morale" target="_blank" style="color: #cccccc; text-decoration: none;">The Bedside Morale</a> · <a href="https://soundcloud.com/the-bedside-morale/sets/dreamo-all-releases" title="Dreamo - All Releases" target="_blank" style="color: #cccccc; text-decoration: none;">Dreamo - All Releases</a></div>',
        iFrameSrc:
          'https://soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1402196998&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        iFrameHref:
          'https://soundcloud.com/the-bedside-morale/sets/dreamo-all-releases',
        iFrameTitle: 'Dreamo - All Releases by The Bedside Morale',
      },
    ],
  };

  const bedsideMoraleMusicCard = {
    backgroundColor: 'bg-carousel-5',
    bandName: 'The Bedside Morale',
    description: 'Solo band from 2013 onward',
    albums: [
      {
        name: 'The Bedside Morale: All Releases',
        link: 'https://soundcloud.com/the-bedside-morale/sets/the-bedside-morale-all',
        iFrame:
          '<iframe width="100%" height="450" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1402197952&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/the-bedside-morale" title="The Bedside Morale" target="_blank" style="color: #cccccc; text-decoration: none;">The Bedside Morale</a> · <a href="https://soundcloud.com/the-bedside-morale/sets/the-bedside-morale-all" title="The Bedside Morale - All Releases" target="_blank" style="color: #cccccc; text-decoration: none;">The Bedside Morale - All Releases</a></div>',
        iFrameSrc:
          'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/playlists/1402197952&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
        iFrameHref:
          'https://soundcloud.com/the-bedside-morale/sets/the-bedside-morale-all',
        iFrameTitle: 'The Bedside Morale - All Releases',
      },
    ],
  };

  return (
    // TODO:
    // I think I should go with a loose grid approach for the Bandcamp links
    // This would be a bit more fun and accessible than trying to navigate
    // a few carousels, and gives more of the overall art site vibe

    // Here is an example:
    // https://bandcamp-embed-example.vercel.app/
    <div data-theme="greytheme">
      <div className="grid grid-cols-1 justify-items-center pb-8">
        <h1 className="font-bol text-2xl">Music</h1>
      </div>
      <div>
        {samBanyaMusicCard.albums.map((album, index) => {
          return (
            <iframe
              key={index}
              style={{
                border: '0',
                width: '350px',
                height: '470px',
              }}
              src={`${album.iFrameSrc}`}
              seamless
            >
              <a href={`${album.iFrameHref}`}>{`${album.iFrameTitle}`}</a>
            </iframe>
          );
        })}
      </div>
      <div>
        {jeeveSobsMusicCard.albums.map((album, index) => {
          return (
            <iframe
              key={index}
              style={{
                border: '0',
                width: '350px',
                height: '470px',
              }}
              src={`${album.iFrameSrc}`}
              seamless
            >
              <a href={`${album.iFrameHref}`}>{`${album.iFrameTitle}`}</a>
            </iframe>
          );
        })}
      </div>
      <div>
        {shibesMusicCard.albums.map((album, index) => {
          return (
            <iframe
              key={index}
              style={{
                border: '0',
                width: '350px',
                height: '470px',
              }}
              src={`${album.iFrameSrc}`}
              seamless
            >
              <a href={`${album.iFrameHref}`}>{`${album.iFrameTitle}`}</a>
            </iframe>
          );
        })}
      </div>
    </div>
  );
}
