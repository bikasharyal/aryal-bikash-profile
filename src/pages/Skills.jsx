import React from 'react'


import csharpIcon from '../assets/csharp.png'
import dotNetIcon from '../assets/netcore.png'
import angularIcon from '../assets/angular.webp'
import VueIcon from '../assets/vue.png'
import ReactIcon from '../assets/react.png'
import SqlServerIcon from '../assets/mssqlserver.png'
import DynamoDb from '../assets/dynamodb.png'

import NodeIcon from '../assets/node.png'
import PHPIcon from '../assets/php.webp'
import wpfIcon from '../assets/wpf.png'

import DockerIcon from '../assets/docker.png'
import AwsIcon from '../assets/aws.png'
import GithubIcon from '../assets/github.png'
import GitIcon from '../assets/git.png'
import htmlIcon from '../assets/html5.png'
import CssIcon from '../assets/css3.webp'
import TypeScriptIcon from '../assets/typescript.png'
import JiraIcon from '../assets/JiraLogo.png'

const Skills = () => {

  const technologies = [
    {name: 'C#', image: csharpIcon},
    {name: '.Net Core', image: dotNetIcon},
    {name: 'Angular', image: angularIcon},
    {name: 'VueJs', image: VueIcon},
    {name: 'ReactJs', image: ReactIcon},
    {name: 'TypeScript', image: TypeScriptIcon},
    {name: 'MS SQL Server', image: SqlServerIcon},
    {name: 'DynamoDb', image: DynamoDb},

    {name: 'WPF', image: wpfIcon},
    {name: 'NodeJs', image: NodeIcon},
    {name: 'PHP', image: PHPIcon},

    {name: 'Docker', image: DockerIcon},
    {name: 'Git', image: GitIcon},
    {name: 'Github', image: GithubIcon},
    {name: 'AWS', image: AwsIcon},
    {name: 'Jira', image: JiraIcon},
    {name: 'CSS', image: CssIcon},
    {name: 'HTML', image: htmlIcon},
  ]

  return (
    <div name="skills" className='w-full h-screen bg-primary text-gray-300'>
       <div className='w-full h-full justify-center max-w-[1200px] mx-auto p-4 flex flex-col'>
          <div>
            <p className='text-600 text-4xl font-bold border-600 inline'
            style={{ color: '#800000', textDecoration:'underline', textDecorationColor: '#800000'}}>Specialties</p>
            <p className='py-4'>These are the technologies that I have hands-on experience with over the years.</p>
          </div>
          <div className='w-full grid gap-4 text-center py-8 grid-cols-2 md:grid-cols-6'>
            {technologies.map((item, index) => (
               <div key={index} className='shadow-[#040c16] shadow-md rounded-md hover:scale-110 duration-500'>
                  <img src={item.image} alt={item.image} className='w-20 mx-auto'></img>
                  <p className='my-4'>{item.name}</p>
                </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Skills
