import { Metadata } from 'next';

export const metadata: Metadata = { title: 'Music' };

export default function Page() {
  const musicCards = [
    {
      bandName: 'Sam Banya',
      description: 'Solo band from 2023 onward',
      albumLinks: ['https://sambanya.bandcamp.com/album/lousy-cartographer'],
    },
    {
      bandName: 'JeeveSobs',
      description: 'Solo band from 2021 onward',
      albumLinks: [
        'https://jeevesobs.bandcamp.com/album/breakpoints',
        'https://jeevesobs.bandcamp.com/album/jagged-edges',
      ],
    },
    {
      bandName: 'Shibes',
      description: 'Solo band from 2017 onward',
      albumLinks: [
        'https://shibes.bandcamp.com/album/perspectives',
        'https://shibes.bandcamp.com/album/slopes',
        'https://shibes.bandcamp.com/album/loop-city',
        'https://shibes.bandcamp.com/album/meteors',
        'https://shibes.bandcamp.com/album/character',
        'https://shibes.bandcamp.com/album/enough',
        'https://shibes.bandcamp.com/album/life-is-strange',
        'https://shibes.bandcamp.com/album/internal-fighting',
        'https://shibes.bandcamp.com/album/athletics',
        'https://shibes.bandcamp.com/album/still-trying',
      ],
    },
    {
      bandName: 'Dreamo',
      description: 'Two piece band from 2016 onward',
      albumLinks: [
        'https://soundcloud.com/the-bedside-morale/sets/dreamo-all-releases',
      ],
    },
    {
      bandName: 'The Bedside Morale',
      description: 'Solo band from 2013 onward',
      albumLinks: [
        'https://soundcloud.com/the-bedside-morale/sets/the-bedside-morale-all',
      ],
    },
  ];
  return (
    <>
      <p>Music</p>
      {musicCards.map((musicCard) => {
        return (
          <>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{musicCard.bandName}</h2>
                <h2>{musicCard.description}</h2>
                <div className="justify-beginning card-actions">
                  <button className="btn btn-primary">Previous</button>
                </div>
                <div>
                  {/* TODO: Figure out how to embed iframes into NextJS pages */}
                  {/* <iframe style="border: 0; width: 100%; height: 120px;" src="https://bandcamp.com/EmbeddedPlayer/album=3459013849/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/artwork=small/transparent=true/" seamless><a href="https://shibes.bandcamp.com/album/still-trying">Still Trying by Shibes</a></iframe> */}
                </div>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Next</button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
}
