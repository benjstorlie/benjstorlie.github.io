import React, { useState, useEffect } from 'react';
import {useParams} from 'react-router-dom';
import { Octokit, App } from "octokit";

export default function Project() {
  const { repo } = useParams();

  const state = {
    title: '',
  }

  useEffect( async () => {
    
  }) 

}