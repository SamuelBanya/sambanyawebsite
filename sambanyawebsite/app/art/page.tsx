import { Metadata } from 'next';
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Art',
};

export default function Page() {
  const art2019Images = [
    {
      name: 'Big Bird Sticker',
      path: '/images/art-2019/Big Bird Sticker.png',
    },
    {
      name: 'Shibes Slopes Album Art',
      path: '/images/art-2019/Shibes Slopes Album Art.png',
    },
  ];

  const art2020Images = [
    {
      name: '10 Minute Portrait Of Guan Yu (2-19-2020)',
      path: '/images/art-2020/10 Minute Portrait Of Guan Yu (2-19-2020).png',
    },
    {
      name: 'Backlit Muscular Man (2-8-2020)',
      path: '/images/art-2020/Backlit Muscular Man (2-8-2020).png',
    },
    {
      name: 'Barney Kessel Feeling The Music (3-3-2020)',
      path: '/images/art-2020/Barney Kessel Feeling The Music (3-3-2020).png',
    },
    {
      name: 'Foreshortened Man Standing (1-30-2020)',
      path: '/images/art-2020/Foreshortened Man Standing (1-30-2020).png',
    },
    {
      name: "Foreshortened Portrait Of A Man's Head (2-2-2020)",
      path: "/images/art-2020/Foreshortened Portrait Of A Man's Head (2-2-2020).png",
    },
    {
      name: 'Guan Yu Part I (3-3-2020)',
      path: '/images/art-2020/Guan Yu Part I (3-3-2020).png',
    },
    {
      name: 'Guan Yu Part II (3-4-2020)',
      path: '/images/art-2020/Guan Yu Part II (3-4-2020).png',
    },
    {
      name: 'Hair Texture Drawing With Self Portrait (2-23-2020)',
      path: '/images/art-2020/Hair Texture Drawing With Self Portrait (2-23-2020).png',
    },
    {
      name: 'Hasty Regret (3-3-2020)',
      path: '/images/art-2020/Hasty Regret (3-3-2020).png',
    },
    {
      name: 'Head In Strong Lighting (2-5-2020)',
      path: '/images/art-2020/Head In Strong Lighting (2-5-2020).png',
    },
    {
      name: 'I Barely Know You (2-18-2020)',
      path: '/images/art-2020/I Barely Know You (2-18-2020).png',
    },
    {
      name: 'Kermit The Frog (1-3-2020)',
      path: '/images/art-2020/Kermit The Frog (1-3-2020).png',
    },
    { name: 'Potential 10', path: '/images/art-2020/Potential10.gif' },
    { name: 'Potential 12', path: '/images/art-2020/Potential12.gif' },
    { name: 'Potential 5', path: '/images/art-2020/Potential 5.gif' },
    { name: 'Potential 5', path: '/images/art-2020/Potential5.gif' },
    { name: 'Potential 7', path: '/images/art-2020/Potential7.gif' },
    { name: 'Potential 9', path: '/images/art-2020/Potential9.gif' },
    {
      name: 'Quarter View Portrait Of Zach Hill (2-1-2020)',
      path: '/images/art-2020/Quarter View Portrait Of Zach Hill (2-1-2020).png',
    },
    {
      name: 'Reflective Surface Drawing Of Hungarian Knight Armor (2-24-2020)',
      path: '/images/art-2020/Reflective Surface Drawing Of Hungarian Knight Armor (2-24-2020).png',
    },
    {
      name: 'Sword Of Chance',
      path: '/images/art-2020/SwordOfChance.png',
    },
  ];

  const art2021Images = [
    {
      name: 'Another Sketch Of Vagabond Character (12-01-2021)',
      path: '/images/art-2021/AnotherSketchOfVagabondCharacter(12-01-2021).png',
    },
    {
      name: 'Beast And Viking (12-01-2022)',
      path: '/images/art-2021/BeastAndViking (12-01-2022).png',
    },
    {
      name: 'Centurion Chariot Pike And Colloseum (12-07-2021)',
      path: '/images/art-2021/CenturionChariotPikeAndColloseum (12-07-2021).png',
    },
    {
      name: 'Copy Cat Design',
      path: '/images/art-2021/CopyCatDesign.png',
    },
    {
      name: 'Countenance Of A Samurai (03-21-2021)',
      path: '/images/art-2021/CountenanceOfASamurai(03-21-2021).png',
    },
    {
      name: 'Darken The Room (11-03-2021)',
      path: '/images/art-2021/DarkenTheRoom(11-03-2021).png',
    },
    {
      name: 'JeeveSobs - Breakpoints Album Cover Art',
      path: '/images/art-2021/JeeveSobs - Breakpoints Album Cover Art.png',
    },
    {
      name: 'Jeff Watts Dazed (12-03-2021)',
      path: '/images/art-2021/JeffWattsDazed(12-03-2021,InitialScan).png',
    },
    {
      name: 'Painted Dark Souls (11-14-2021)',
      path: '/images/art-2021/PaintedDarkSouls(11-14-2021).png',
    },
    {
      name: 'Painting Of A Random Woman (11-04-2021)',
      path: '/images/art-2021/PaintingOfARandomWoman(11-04-2021).png',
    },
    {
      name: 'Pharoah By An Oasis',
      path: '/images/art-2021/PharoahByAnOasis.png',
    },
    {
      name: 'Rhino Bear Near The Cliff (12-09-2021).png',
      path: '/images/art-2021/RhinoBearNearTheCliff(12-09-2021,InitialScan).png',
    },
    {
      name: 'Side By Side (11-03-2021)',
      path: '/images/art-2021/SideBySide(11-03-2021).png',
    },
    {
      name: 'Tempest Ultimatum (02-28-2021)',
      path: '/images/art-2021/TempestUltimatum(02-28-2021).png',
    },
    {
      name: 'The Interrogation Room With Base Colors Added (12-04-2021)',
      path: '/images/art-2021/TheInterrogationRoom(12-04-2021,BaseColorsAdded).png',
    },
    {
      name: 'The Interrogation Room (12-04-2021)',
      path: '/images/art-2021/TheInterrogationRoom(12-04-2021).png',
    },
    {
      name: 'The Rabbit Foot Episode (11-17-2021)',
      path: '/images/art-2021/TheRabbitFootEpisode(11-17-2021,InitialScan).png',
    },
    {
      name: 'Zootopia Elephant (12-01-2021)',
      path: '/images/art-2021/ZootopiaElephant(12-01-2021).png',
    },
  ];

  const art2022Images = [
    {
      name: 'Another Portrait Of An English King (01-12-2022)',
      path: '/images/art-2022/Another Portrait Of An English King (01-12-2022).png',
    },
    {
      name: 'A Seemingly Endless Ocean (03-16-2022)',
      path: '/images/art-2022/ASeeminglyEndlessOcean(03-16-2022).png',
    },
    {
      name: 'Color Study 2 Of King Louis (02-06-2022)',
      path: '/images/art-2022/Color Study 2 Of King Louis (02-06-2022).png',
    },
    {
      name: 'Color Study For Alfred Kelsner Ink Drawing (02-06-2022)',
      path: '/images/art-2022/Color Study For Alfred Kelsner Ink Drawing (02-06-2022).png',
    },
    {
      name: 'Color Study Of Dwarf With His Helmet (02-06-2022)',
      path: '/images/art-2022/Color Study Of Dwarf With His Helmet (02-06-2022).png',
    },
    {
      name: 'Color Study Of Jester (02-13-2022)',
      path: '/images/art-2022/Color Study Of Jester (02-13-2022).png',
    },
    {
      name: 'Color Study Of Jester (02-14-2022)',
      path: '/images/art-2022/Color Study Of Jester (02-14-2022).png',
    },
    {
      name: 'Color Study Of Jester 2 (02-13-2022)',
      path: '/images/art-2022/Color Study Of Jester 2 (02-13-2022).png',
    },
    {
      name: 'Color Study Of King (02-11-2022)',
      path: '/images/art-2022/Color Study Of King (02-11-2022).png',
    },
    {
      name: 'Color Study Of King (02-17-2022)',
      path: '/images/art-2022/Color Study Of King (02-17-2022).png',
    },
    {
      name: 'Color Study Of King Louis (02-06-2022)',
      path: '/images/art-2022/Color Study Of King Louis (02-06-2022).png',
    },
    {
      name: 'Color Study Of Medieval Knight WIth Sword (02-21-2022)',
      path: '/images/art-2022/Color Study Of Medieval Knight WIth Sword (02-21-2022).png',
    },
    {
      name: "Color Study Of Syd Meads's Space Cruis Ship Painting (02-20-2022)",
      path: "/images/art-2022/Color Study Of Syd Meads's Space Cruis Ship Painting (02-20-2022).png",
    },
    {
      name: 'Court Jester (01-17-2022)',
      path: '/images/art-2022/Court Jester (01-17-2022).png',
    },
    {
      name: 'Drawing Of Beethoven Cast Sculpture (01-06-2022)',
      path: '/images/art-2022/Drawing Of Beethoven Cast Sculpture (01-06-2022).png',
    },
    {
      name: 'Dwarf With His Helmet (01-08-2022)',
      path: '/images/art-2022/Dwarf With His Helmet (01-08-2022).png',
    },
    {
      name: 'Guan Yu (03-24-2022)',
      path: '/images/art-2022/Guan Yu (03-24-2022).png',
    },
    {
      name: 'Guan Yu Statue (03-17-2022)',
      path: '/images/art-2022/Guan Yu Statue (03-17-2022).png',
    },
    {
      name: 'Guan Yu With A Halberd And On A Horse (03-31-2024)',
      path: '/images/art-2022/Guan Yu With A Halberd And On A Horse (03-31-2024).png',
    },
    {
      name: 'Jacques On The Bed (01-17-22)',
      path: '/images/art-2022/Jacques On The Bed (01-17-22).png',
    },
    {
      name: 'Jacques Watermelon Phone Case Image (12-2022)',
      path: '/images/art-2022/JacquesWatermelonPhoneCaseImage(12-2022).png',
    },
    {
      name: 'Jeff Watts Dazed (01-03-2022,Illustration)',
      path: '/images/art-2022/JeffWattsDazed(01-03-2022,Illustration).png',
    },
    {
      name: 'Kermit With The Pearl Earring Color Study (02-20-2022)',
      path: '/images/art-2022/Kermit With The Pearl Earring Color Study (02-20-2022).png',
    },
    {
      name: 'Kermit With The Pearl Earring (Color Study, Cropped, 2-20-2022)',
      path: '/images/art-2022/KermitWithThePearlEarring(ColorStudy,Cropped,2-20-2022).png',
    },
    {
      name: 'King Color Study (02-10-2022)',
      path: '/images/art-2022/King Color Study (02-10-2022).png',
    },
    {
      name: 'Medieval Knight With A Sword (01-17-2022)',
      path: '/images/art-2022/Medieval Knight With A Sword (01-17-2022).png',
    },
    {
      name: 'Noble King On Top Of A Box (01-18-2022)',
      path: '/images/art-2022/Noble King On Top Of A Box (01-18-2022).png',
    },
    {
      name: 'Portait Of An Old Jester (01-13-2022)',
      path: '/images/art-2022/Portait Of An Old Jester (01-13-2022).png',
    },
    {
      name: 'Portait Of A Seated Jester (01-12-2022)',
      path: '/images/art-2022/Portait Of A Seated Jester (01-12-2022).png',
    },
    {
      name: 'Portrait Of A Jester In A Chair (01-13-2022)',
      path: '/images/art-2022/Portrait Of A Jester In A Chair (01-13-2022).png',
    },
    {
      name: 'Portrait Of An English King (01-12-2022)',
      path: '/images/art-2022/Portrait Of An English King (01-12-2022).png',
    },
    {
      name: 'Portrait Of A Queen (01-20-2022)',
      path: '/images/art-2022/Portrait Of A Queen (01-20-2022).png',
    },
    {
      name: 'Portrait Of A Queen (Marker Study ,02-01-2022)',
      path: '/images/art-2022/PortraitOfAQueen(MarkerStudy,02-01-2022).png',
    },
    {
      name: 'Portrait Of A Queen (Marker Study 2 ,02-05-2022)',
      path: '/images/art-2022/PortraitOfAQueen(MarkerStudy2,02-05-2022).png',
    },
    {
      name: 'Portrait Of King Louis I Of Hungary (01-19-2022)',
      path: '/images/art-2022/Portrait Of King Louis I Of Hungary (01-19-2022).png',
    },
    {
      name: 'Rhino Bear Near The Cliff (01-03-2022, Illustration)',
      path: '/images/art-2022/RhinoBearNearTheCliff(01-03-2022,Illustration).png',
    },
    {
      name: 'Scene From Rocky III (01-03-2022)',
      path: '/images/art-2022/SceneFromRockyIII(01-03-2022).png',
    },
    {
      name: 'Smokestack Robot Near A Factory And Steam Engine (01-03-2022, Illustration)',
      path: '/images/art-2022/SmokestackRobotNearAFactoryAndSteamEngine(01-03-2022,Illustration).png',
    },
    {
      name: 'Study Of Ink Drawing By Alfred Kelsner (01-10-2022)',
      path: '/images/art-2022/Study Of Ink Drawing By Alfred Kelsner (01-10-2022).png',
    },
    {
      name: 'The Rabbit Foot Episode (01-03-2022, Illustration)',
      path: '/images/art-2022/TheRabbitFootEpisode(01-03-2022,Illustration).png',
    },
    {
      name: 'Thumbnail Portrait Of A King (01-12-2022)',
      path: '/images/art-2022/Thumbnail Portrait Of A King (01-12-2022).png',
    },
    {
      name: 'Viking And Beast (01-02-2022, Illustration)',
      path: '/images/art-2022/VikingAndBeast(01-02-2022,Illustration).png',
    },
    {
      name: 'Xiahou Dun With A Scimitar (03-31-2022)',
      path: '/images/art-2022/Xiahou Dun With A Scimitar (03-31-2022).png',
    },
    {
      name: 'Zootopia Elephant (01-03-2022, Illustration)',
      path: '/images/art-2022/ZootopiaElephant(01-03-2022,Illustration).png',
    },
  ];

  const art2023Images = [
    {
      name: '2nd Preliminary Study Of Dragonlance Study (03-06-2023)',
      path: '/images/art-2023/2nd Preliminary Study Of Dragonlance Study (03-06-2023).png',
    },
    {
      name: 'Automatic Drawing (03-31-2023)',
      path: '/images/art-2023/Automatic Drawing (03-31-2023).png',
    },
    {
      name: 'Ink Study OF Dragonlance Painting (03-08-2023)',
      path: '/images/art-2023/Ink Study OF Dragonlance Painting (03-08-2023).png',
    },
    { name: 'JABBA Design', path: '/images/art-2023/JABBADesign1.png' },
    {
      name: 'Jonathan Waxman (03-21-2023)',
      path: '/images/art-2023/Jonathan Waxman (03-21-2023).png',
    },
    {
      name: 'Knight On Horse Study (03-29-2023)',
      path: '/images/art-2023/Knight On Horse Study (03-29-2023).png',
    },
    {
      name: 'Knight With Horse Study (04-04-2023)',
      path: '/images/art-2023/Knight With Horse Study (04-04-2023).png',
    },
    {
      name: 'Knight With Spear (04-13-2023)',
      path: '/images/art-2023/Knight With Spear (04-13-2023).png',
    },
    {
      name: 'Knight With Sword Study (05-10-2023)',
      path: '/images/art-2023/Knight With Sword Study (05-10-2023).png',
    },
    {
      name: 'Lord Of Fuzz Pedal Design (12-06-2023)',
      path: '/images/art-2023/LordOfFuzzPedalDesign(12-06-2023).png',
    },
    {
      name: 'Mannequin Figure (03-31-2023)',
      path: '/images/art-2023/Mannequin Figure (03-31-2023).png',
    },
    {
      name: 'Mannequin Figure Drawing (04-04-2023)',
      path: '/images/art-2023/Mannequin Figure Drawing (04-04-2023).png',
    },
    {
      name: 'Preliminary Study Of Dragon Lance Study (03-02-2023)',
      path: '/images/art-2023/Preliminary Study Of Dragon Lance Study (03-02-2023).png',
    },
    {
      name: 'Quick Study Of A Larry Elmore Piece (03-01-2023)',
      path: '/images/art-2023/Quick Study Of A Larry Elmore Piece (03-01-2023).png',
    },
    {
      name: 'Sketch Of Knight Character (04-19-2023)',
      path: '/images/art-2023/Sketch Of Knight Character (04-19-2023).png',
    },
    {
      name: 'Tame Impala Live At The Palladium Poster (01-22-2024)',
      path: '/images/art-2023/TameImpalaLiveAtThePalladiumPoster(01-22-2024).png',
    },
    {
      name: 'The Handing Of The Sword (04-06-2023)',
      path: '/images/art-2023/The Handing Of The Sword (04-06-2023).png',
    },
    {
      name: 'Two Knights Near A Castle (03-31-2023)',
      path: '/images/art-2023/Two Knights Near A Castle (03-31-2023).png',
    },
    {
      name: 'Warrior With Woman Study (05-18-2023)',
      path: '/images/art-2023/Warrior With Woman Study (05-18-2023).png',
    },
    {
      name: 'Wizard Phaser Pedal Design (12-13-2023)',
      path: '/images/art-2023/WizardPhaserPedalDesign(12-13-2023).png',
    },
  ];

  const art2024Images = [
    {
      name: 'SteamboatWillieInTheStyleOfJon(01-02-2024).png',
      path: '/images/art-2024/SteamboatWillieInTheStyleOfJon(01-02-2024).png',
    },
  ];

  return (
    <div data-theme="greytheme">
      <h1>Art 2024</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {art2024Images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <br />
      <h1>Art 2023</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {art2023Images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <br />
      <h1>Art 2022</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {art2022Images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <br />
      <h1>Art 2021</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {art2021Images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <br />
      <h1>Art 2020</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {art2020Images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={500}
            height={500}
          />
        ))}
      </div>
      <br />
      <h1>Art 2019</h1>
      <br />
      <div className="grid grid-cols-2 gap-4">
        {art2019Images.map((image, index) => (
          <Image
            key={index}
            src={image.path}
            alt={image.name}
            width={500}
            height={500}
          />
        ))}
      </div>
    </div>
  );
}
