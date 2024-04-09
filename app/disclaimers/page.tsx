import Contacts from '@/components/Contacts';
import { Navigation } from '@/components/Navigation';
import SectionWrapper from '@/components/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

const DisclaimerPage = () => {
  return (
    <main className='flex flex-col items-center'>
      <SectionWrapper bgColor='white'>
        <div className='mx-4 max-w-7xl py-4 lg:py-12 xl:mx-auto'>
          <div className='flex gap-2 lg:gap-x-6'>
            <div className='flex flex-shrink-0 flex-grow-0 basis-12'>
              <Link
                href='/'
                aria-label='back to homepage'
                title='homepage'
                className='my-2'
              >
                <Image
                  src='/logo-192x192.webp'
                  width={48}
                  height={48}
                  alt='logo'
                  className=''
                />
              </Link>
            </div>
            <div className='flex-auto'>
              <h1 className='section-title'>Disclaimers and Notices</h1>
              <p className='text-secondary'>
                Investing in cloud computing, artificial intelligence, and
                quantum mechanics
              </p>
            </div>
          </div>
          <div className='mt-4 flex items-start gap-2 lg:mt-6 lg:gap-x-6'>
            <div className='flex flex-shrink-0 flex-grow-0 basis-12 '>
              <Contacts
                size='small'
                color='black'
                className='flex-col justify-end'
              />
            </div>
            <div className='flex-auto'>
              <p className='mb-4 text-sm'>
                Electronic communications, including email, attachments, and
                text messages, received may contain information that is
                confidential and intended for use only by the addressee. If the
                reader is not the intended recipient, or the employee or agent
                of the intended recipient responsible for delivering the
                message, the reader is hereby notified that any review, copying,
                distribution or use of any transmission is strictly prohibited.
                If the reader has received any transmission in error, please (i)
                notify the sender immediately by email, text, or telephone and
                (ii) destroy all copies of any messages. The information
                contained within this website is for informational purposes only
                and should not be considered investment advice or a
                recommendation to buy or sell any types of securities. The
                information contained within this website was carefully compiled
                from sources Songster Capital believes to be reliable, but we
                cannot guarantee accuracy. We provide this information with the
                understanding that we are not engaged in rendering legal,
                accounting, or tax services. In particular, none of the examples
                should be considered advice tailored to the needs of any
                specific investor. We recommend that all investors seek out the
                services of competent professionals in any of the aforementioned
                areas. With respect to the description of any investment
                strategies, simulations, or investment recommendations, we
                cannot provide any assurances that they will perform as expected
                and as described in our materials. Past performance is not
                indicative of future results. Every investment program has the
                potential for loss as well as gain. There is a risk of loss from
                an investment in securities, including the risk of loss of
                principal. Different types of investments involve varying
                degrees of risk, and there can be no assurance that any specific
                investment will be profitable or suitable for a particular
                investor&apos;s financial situation or risk tolerance.
              </p>
              <p className='text-sm '>
                The information and materials contained in this site, including
                text, graphics, links or other items, are provided “as is,” “as
                available.” Songster Capital does not warrant the accuracy,
                adequacy, or completeness of this information and materials and
                expressly disclaims liability for errors or omissions in this
                information and materials. No warranty of any kind, implied,
                express, or statutory, including but not limited to the
                warranties of non-infringement of third-party rights, title,
                merchantability, fitness for a particular purpose, and freedom
                from computer virus, is given in conjunction with the
                information and materials. Materials copyrighted by Songster
                Capital or owned by any individual or entity are presented here
                for personal, non-commercial use only. Documents, content, or
                images contained in this site may not be copied or reproduced in
                any form without the written permission of Songster Capital. In
                no event will Songster be liable for any damages, including
                without limitation direct or indirect, special, incidental, or
                consequential damages, losses, or expenses arising in connection
                with any failure of performance, error, omission, interruption,
                defect, delay in operation or transmission, computer virus or
                line or system failure, even if Songster Capital, or
                representation thereof, are advised of the possibility of such
                damages, losses or expenses. Hyperlinks to other internet
                resources are at your own risk; the content, accuracy, opinions
                expressed, and other links provided by these resources are not
                investigated, verified, monitored, or endorsed by Songster
                Capital.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>
      <Navigation />
    </main>
  );
};

export default DisclaimerPage;
