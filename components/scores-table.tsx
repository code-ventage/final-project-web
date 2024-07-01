'use client'

import { Score } from '@/services/scores'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table'
import { useState } from 'react'
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationNext,
  PaginationPrevious,
} from './ui/pagination'

interface Props {
  scores: Score[]
}

const TABLE_OFFSET = 10

export default function ScoresTable({ scores }: Props) {
  const [currentIndex, setCurrentIndex] = useState<number>(1)

  return (
    <section className="flex flex-col items-center justify-center">
      <Table>
        {/* <TableCaption>Puntuaciones de usuarios.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>Fecha</TableHead>
            <TableHead>Usuario</TableHead>
            <TableHead>Puntuación</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {scores
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
