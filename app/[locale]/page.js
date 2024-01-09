  'use client'

import { useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import {useTranslations} from 'next-intl';
import { Link } from "./navigation";

import Heading  from '../components/heading/heading'
import Tabs from '../components/tab/tab'

import styles from './page.module.css'


export default function Home() {
    const [locations, setLocations] = useState([]);
    const [text, setText] = useState('');
    const [suggestions, setSuggestions] = useState([]);

      const loadLocations = async (text) => {
        const response = await axios.get(`https://api.cv-library.co.uk/v1/locations`, {
          params: {
            q: text,
          }
        });
        setLocations(response.data);

        const matches = locations.filter(location => {
            const regex = new RegExp(`${text}`, "gi");
            return text && location.label.match(regex)
        })

        setSuggestions(matches);
      }
    
    const onSuggestHandler = (text) => {
      setText(text);
      setSuggestions([]);
    }

    const onChangeHandler = (text) => {
      loadLocations(text);
      setText(text);
    }
    const t = useTranslations('Index');

    return (
      <main className={styles.main}>
          <Heading />
          <div className={styles.languageSwitcher}>
            Change language to: 
            {" "}
            <Link href="/" locale="en">
              English
            </Link>{"|"}
            <Link href="/" locale="nl">
              Dutch
            </Link>
          </div>
          <div className={styles.formWrapper}>
            <label className={styles.label}>
              {t("keywords")} / {t("job_title")} / {t("job_ref")}
              <input className={styles.input} type="text" name="title" placeholder="e.g. Sales Executive" />
            </label>

          <div className={styles.multipleFields}>
            <label className={styles.label}>
            {t("label_two")}
              <input className={styles.input} 
                type="text" 
                name="location" 
                placeholder="e.g. town or postcode"
                onChange={e => onChangeHandler(e.target.value)}
                value={text} 
                onBlur={(e) => {
                  setTimeout(() => {
                    setSuggestions([]);
                  }, 100);
                }} 
                />
            </label>
                      
            <label className={styles.label}>
            {t("label_three")}
              <select className={styles.input} name="distance" id="distance">
                  <option value="15">15 miles</option>
                  <option value="20">20 miles</option>
                  <option value="100">100 miles</option>
              </select>
            </label>
          </div>
          {suggestions &&  suggestions.map((suggestion,i) =>
            <div className={styles.suggestions} key={i} onClick={()=> onSuggestHandler(suggestion.label)}>{suggestion.label}</div>
          )} 
            <button className={styles.button}>Find jobs now 
                  <Image
                    src="/assets/search.svg"
                    alt="Next.js Logo"
                    width={17}
                    height={17}
                    priority
                  />
            </button> 
          </div>

          <Tabs />

      </main>
    )
  }
