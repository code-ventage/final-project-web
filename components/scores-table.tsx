'use client'

import { useState } from 'react'
import { Score } from '@/services/scores'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from './ui/select'

interface Props {
  scores: Score[]
}

type Filter = 'score' | 'date'

const TABLE_OFFSET = 10

export default function ScoresTable({ scores }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(1)
  const [sortBy, setSortBy] = useState<Filter>('date')

  const sortedScores = scores.sort((a, b) => {
    if (sortBy === 'score') return parseInt(b.score) - parseInt(a.score)
    return (
      new Date(b.date).getMilliseconds() - new Date(a.date).getMilliseconds()
    )
  })

  return (
    <section className="mt-4 flex flex-col items-center justify-center">
      <Select
        defaultValue={sortBy}
        onValueChange={value => setSortBy(value as Filter)}
      >
        <SelectTrigger className="mb-2 w-full self-end md:max-w-[300px]">
          <SelectValue placeholder="Ordenar por" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="score">Puntuación</SelectItem>
          <SelectItem value="date">Fecha</SelectItem>
        </SelectContent>
      </Select>

      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Puntuación</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {sortedScores
            .slice(
              (currentIndex - 1) * TABLE_OFFSET,
              (currentIndex - 1) * TABLE_OFFSET + TABLE_OFFSET
            )
            .map(({ date, score, username }, index) => (
              <TableRow key={index}>
                <TableCell>{new Date(date).toLocaleString()}</TableCell>
                <TableCell>{username}</TableCell>
                <TableCell>{score}</TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <Pagination className="mt-3 select-none">
        <PaginationContent>
          <PaginationPrevious
            onClick={() => {
              if (currentIndex === 1) return
              setCurrentIndex(currentIndex - 1)
            }}
          />
          <PaginationEllipsis />
          <PaginationNext
            onClick={() => {
              if (
                (currentIndex - 1) * TABLE_OFFSET + TABLE_OFFSET >=
                scores.length
              )
                return
              setCurrentIndex(currentIndex + 1)
            }}
          />
        </PaginationContent>
      </Pagination>
    </section>
  )
}
