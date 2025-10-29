# 🎾 Padel Hub NO

**Padel Hub NO** is a modern platform for padel event organizers to easily manage players, schedule matches, and track performance through a smart ranking system.

Organizers can create events, add players, and automatically generate balanced matches using a ranking-based algorithm — ensuring fair play and exciting competition.

---

## 🚀 Features

- Create and manage padel events
- Add and track players with rankings
- Auto-generate matches using a ranking algorithm
- Real-time ranking updates after each match
- Simple, intuitive organizer dashboard

---

## 🧠 Ranking System

Matches are generated based on player rankings that evolve dynamically with each result — factoring in wins, losses, and opponent difficulty for fair matchmaking.

---

## 🏗️ Tech Stack

- **Backend:** Laravel
- **Frontend:** Svelte

---

## 🗄️ Database Structure

- player
    - name
    - rating
    - user_id
- user
    - name
    - email
    - email_verified_at
    - password
    - remember_token
- event
    - starts_at
    - court_count
    - ended_at
- event_player
    - event_id
    - player_id
    - event_rating
    - disabled_at
- game
    - event_id
    - court
    - round
- game_player
    - game_id
    - player_id
    - previous_rating
    - points
    - partner_id
    - result

---

**Padel Hub NO – Where Competition Meets Organization.**
