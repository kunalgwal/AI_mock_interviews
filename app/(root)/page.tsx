import React from 'react'
import {Button} from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { dummyInterviews } from '@/constants';
import InterviewCard from '@/components/InterviewCard';

const page = () => {
  return (
    <>
      <section className="card-cta">
          <div className="flex flex-col gap-6 max-w-lg">
              <h2>Get Interview-ready with AI-Powered Practice & Feedback</h2>
              <p className="text-lg">Practice on real interview question & get instant feedback</p>
              <Button asChild className="btn-primary max-sm:w-full">
                  <Link href="/interview">Start an Interview</Link>

              </Button>
          </div>

          <Image src="/robot.png" alt="robo-dude" width={400} height={400} className="max-sm:hidden" />
      </section>

      <section className="flex flex-col gap-6 mt-8">
          <h2>Your Interviews</h2>
          <div className="interview-section flex flexx-row flex-wrap gap-6">
              {dummyInterviews.map((interview) => (
                <InterviewCard {...interview} key={interview.id} />
              ))}

              {/* <p>You haven't taken any interview yet</p> */}

          </div>

      </section>

      <section className="flex flex-col gap-6 mt-8">
          <h2>take an Interview</h2>
          <div className="interview-section flex flexx-row flex-wrap gap-6">
              {dummyInterviews.map((interview) => (
                <InterviewCard {...interview} key={interview.id}/>
              ))}
          </div>
      </section>
    
    
    </>
  )
}

export default page