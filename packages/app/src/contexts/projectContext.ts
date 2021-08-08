import { BigNumber } from '@ethersproject/bignumber'
import { FundingCycle } from 'models/funding-cycle'
import { PayoutMod, TicketMod } from 'models/mods'
import { ProjectMetadata } from 'models/project-metadata'
import { createContext } from 'react'

export type ProjectContext = {
  projectId: BigNumber | undefined
  handle: string | undefined
  metadata: ProjectMetadata | undefined
  owner: string | undefined // owner address
  isOwner: boolean | undefined // connected user is owner
  currentFC: FundingCycle | undefined
  queuedFC: FundingCycle | undefined
  currentPayoutMods: PayoutMod[] | undefined
  currentTicketMods: TicketMod[] | undefined
  queuedPayoutMods: PayoutMod[] | undefined
  queuedTicketMods: TicketMod[] | undefined
  tokenSymbol: string | undefined
  tokenAddress: string | undefined
  balanceInCurrency: BigNumber | undefined
}

export const ProjectContext = createContext<ProjectContext>({
  projectId: undefined,
  handle: undefined,
  metadata: undefined,
  owner: undefined,
  isOwner: undefined,
  currentFC: undefined,
  queuedFC: undefined,
  currentPayoutMods: undefined,
  currentTicketMods: undefined,
  queuedPayoutMods: undefined,
  queuedTicketMods: undefined,
  tokenAddress: undefined,
  tokenSymbol: undefined,
  balanceInCurrency: undefined,
})