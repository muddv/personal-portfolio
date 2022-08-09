import type { NextPage } from 'next'
import Head from 'next/head'
import Layout from './layout'
import Footer from './footer'
import Image from 'next/image'
import ghProfilePic from '../../public/gh_profile_picture_round.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="h-full w-screen bg-body-blue text-white dark:bg-black dark:text-white">
        <Layout></Layout>
        <div className="mx-2">
          <h1 className="pt-24 flex justify-center font-extrabold text-2xl">
            Welcome to my page
          </h1>
          <svg className='pt-2 h-12 w-full' viewBox="0 0 10 10" xmlns="http://www.w3.org/2000/svg">
            <line x1="0" y1="0" x2="100" y2="0" stroke="white" />
          </svg>
          <Image className="w-full h-full"src={ghProfilePic} alt="GitHub Profile Picture"></Image>
          <a className='bg-button-green p-2 mb-4 green border-2 border-button-green rounded-2xl text-body-blue'
            href="/file.pdf"
            alt="download pdf"
            target="_blank"
            rel="noopener noreferrer"
          >Download CV</a>
          <div className='mt-4'>American actor Billy Porter wore a black velvet tuxedo dress designed by Christian Siriano on the red carpet of the 91st Academy Awards (Oscars) on February 24, 2019. Porter had recently come into public view for his breakout role in the FX television series Pose, and his boundary-pushing red carpet attire during the 2018–19 film awards season. Following his appearance at the 76th Golden Globe Awards in a custom silver suit with fuchsia-lined cape, he was invited to host red carpet interviews at the Oscars pre-show. Porter approached Siriano and together they conceived the tuxedo gown. It was well-received by fashion journalists, who highlighted its elegant design and described it as a favorite Oscars dress and one of Porter's most fashionable red carpet looks. The gown cemented Porter's status as a celebrity and as a fashion icon. Porter considers the outfit a piece of political art intended to drive a conversation about men's fashion and masculinity. It has also received praise from academics and the general public, as well as criticism from conservative commentators. American actor Billy Porter wore a black velvet tuxedo dress designed by Christian Siriano on the red carpet of the 91st Academy Awards (Oscars) on February 24, 2019. Porter had recently come into public view for his breakout role in the FX television series Pose, and his boundary-pushing red carpet attire during the 2018–19 film awards season. Following his appearance at the 76th Golden Globe Awards in a custom silver suit with fuchsia-lined cape, he was invited to host red carpet interviews at the Oscars pre-show. Porter approached Siriano and together they conceived the tuxedo gown. It was well-received by fashion journalists, who highlighted its elegant design and described it as a favorite Oscars dress and one of Porter's most fashionable red carpet looks. The gown cemented Porter's status as a celebrity and as a fashion icon. Porter considers the outfit a piece of political art intended to drive a conversation about men's fashion and masculinity. It has also received praise from academics and the general public, as well as criticism from conservative commentators. American actor Billy Porter wore a black velvet tuxedo dress designed by Christian Siriano on the red carpet of the 91st Academy Awards (Oscars) on February 24, 2019. Porter had recently come into public view for his breakout role in the FX television series Pose, and his boundary-pushing red carpet attire during the 2018–19 film awards season. Following his appearance at the 76th Golden Globe Awards in a custom silver suit with fuchsia-lined cape, he was invited to host red carpet interviews at the Oscars pre-show. Porter approached Siriano and together they conceived the tuxedo gown. It was well-received by fashion journalists, who highlighted its elegant design and described it as a favorite Oscars dress and one of Porter's most fashionable red carpet looks. The gown cemented Porter's status as a celebrity and as a fashion icon. Porter considers the outfit a piece of political art intended to drive a conversation about men's fashion and masculinity. It has also received praise from academics and the general public, as well as criticism from conservative commentators. American actor Billy Porter wore a black velvet tuxedo dress designed by Christian Siriano on the red carpet of the 91st Academy Awards (Oscars) on February 24, 2019. Porter had recently come into public view for his breakout role in the FX television series Pose, and his boundary-pushing red carpet attire during the 2018–19 film awards season. Following his appearance at the 76th Golden Globe Awards in a custom silver suit with fuchsia-lined cape, he was invited to host red carpet interviews at the Oscars pre-show. Porter approached Siriano and together they conceived the tuxedo gown. It was well-received by fashion journalists, who highlighted its elegant design and described it as a favorite Oscars dress and one of Porter's most fashionable red carpet looks. The gown cemented Porter's status as a celebrity and as a fashion icon. Porter considers the outfit a piece of political art intended to drive a conversation about men's fashion and masculinity. It has also received praise from academics and the general public, as well as criticism from conservative commentators. American actor Billy Porter wore a black velvet tuxedo dress designed by Christian Siriano on the red carpet of the 91st Academy Awards (Oscars) on February 24, 2019. Porter had recently come into public view for his breakout role in the FX television series Pose, and his boundary-pushing red carpet attire during the 2018–19 film awards season. Following his appearance at the 76th Golden Globe Awards in a custom silver suit with fuchsia-lined cape, he was invited to host red carpet interviews at the Oscars pre-show. Porter approached Siriano and together they conceived the tuxedo gown. It was well-received by fashion journalists, who highlighted its elegant design and described it as a favorite Oscars dress and one of Porter's most fashionable red carpet looks. The gown cemented Porter's status as a celebrity and as a fashion icon. Porter considers the outfit a piece of political art intended to drive a conversation about men's fashion and masculinity. It has also received praise from academics and the general public, as well as criticism from conservative commentators. American actor Billy Porter wore a black velvet tuxedo dress designed by Christian Siriano on the red carpet of the 91st Academy Awards (Oscars) on February 24, 2019. Porter had recently come into public view for his breakout role in the FX television series Pose, and his boundary-pushing red carpet attire during the 2018–19 film awards season. Following his appearance at the 76th Golden Globe Awards in a custom silver suit with fuchsia-lined cape, he was invited to host red carpet interviews at the Oscars pre-show. Porter approached Siriano and together they conceived the tuxedo gown. It was well-received by fashion journalists, who highlighted its elegant design and described it as a favorite Oscars dress and one of Porter's most fashionable red carpet looks. The gown cemented Porter's status as a celebrity and as a fashion icon. Porter considers the outfit a piece of political art intended to drive a conversation about men's fashion and masculinity. It has also received praise from academics and the general public, as well as criticism from conservative commentators. </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  )
}

export default Home
