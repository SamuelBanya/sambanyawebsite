import { lusitana } from '../fonts';

export default async function BandLinks() {
  const links = [
    {
      name: 'Sam Banya',
      avatarLink: 'https://f4.bcbits.com/img/0035792289_20.jpg',
      bandLink: 'https://sambanya.bandcamp.com',
    },
    {
      name: 'JeeveSobs',
      avatarLink: 'https://f4.bcbits.com/img/0024493054_10.jpg',
      bandLink: 'https://jeevesobs.bandcamp.com',
    },
    {
      name: 'Shibes',
      avatarLink: 'https://f4.bcbits.com/img/a0174633706_10.jpg',
      bandLink: 'https://shibes.bandcamp.com',
    },
    {
      name: 'Dreamo',
      avatarLink:
        'https://i1.sndcdn.com/avatars-000273456618-wzz4xt-t500x500.jpg',
      bandLink: 'https://soundcloud.com/dreamoband',
    },
    {
      name: 'The Bedside Morale',
      avatarLink:
        'https://i1.sndcdn.com/avatars-000181418066-8m4fri-t500x500.jpg',
      href: 'https://soundcloud.com/the-bedside-morale',
    },
  ];
  return (
    <div>
      <div className="avatar md:flex md:justify-center">
        <div className="w-24 rounded-full">
          <img src="https://f4.bcbits.com/img/0035792289_20.jpg" />
        </div>
      </div>
      <h2
        className={`${lusitana.className} mb-4 pt-4 text-xl font-bold md:flex md:justify-center md:text-2xl`}
      >
        Sam Banya
      </h2>
      <h2
        className={`${lusitana.className} mb-4 pb-2 text-xl md:flex md:justify-center md:text-2xl`}
      >
        Artist, Musician
      </h2>
      {links.map((link) => {
        return (
          <div key={link.name} className="py-2 md:flex md:justify-center">
            <button className="btn btn-warning w-96 rounded-3xl">
              <div className="avatar">
                <div className="w-6 rounded-full">
                  <img src={link.avatarLink} />
                </div>
              </div>
              <a href={link.bandLink}>{link.name}</a>
            </button>
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
