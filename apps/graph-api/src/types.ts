import { GraphQLResolveInfo } from 'graphql';
import { DataSourceContext } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AvatarImage = {
  __typename?: 'AvatarImage';
  thumbnail: Scalars['String']['output'];
};

export type Card = {
  __typename?: 'Card';
  description: Scalars['String']['output'];
  image: Scalars['String']['output'];
  index: Scalars['Int']['output'];
  keywords: Array<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numeral: Scalars['String']['output'];
  reversedKeywords: Array<Scalars['String']['output']>;
  title: Scalars['String']['output'];
  type: Scalars['String']['output'];
};

export type CelticCross = {
  __typename?: 'CelticCross';
  challenge: Scalars['String']['output'];
  crowns: Scalars['String']['output'];
  future: Scalars['String']['output'];
  hope: Scalars['String']['output'];
  influences: Scalars['String']['output'];
  outcome: Scalars['String']['output'];
  past: Scalars['String']['output'];
  root: Scalars['String']['output'];
  self: Scalars['String']['output'];
  situation: Scalars['String']['output'];
};

export type CelticCrossInput = {
  challenge: Scalars['String']['input'];
  crowns: Scalars['String']['input'];
  future: Scalars['String']['input'];
  hope: Scalars['String']['input'];
  influences: Scalars['String']['input'];
  outcome: Scalars['String']['input'];
  past: Scalars['String']['input'];
  root: Scalars['String']['input'];
  self: Scalars['String']['input'];
  situation: Scalars['String']['input'];
};

export type Mutation = {
  __typename?: 'Mutation';
  addSpread: Spread;
};


export type MutationAddSpreadArgs = {
  spread: SpreadInput;
};

export type Query = {
  __typename?: 'Query';
  avatarImages: Array<AvatarImage>;
  cardsByIndex: Array<Card>;
};


export type QueryCardsByIndexArgs = {
  indexes: Array<Scalars['Int']['input']>;
};

export type Spread = {
  __typename?: 'Spread';
  cards: Array<SpreadCard>;
  displayName: Scalars['String']['output'];
  name: Scalars['String']['output'];
  positions: Array<SpreadPosition>;
};

export type SpreadCard = {
  __typename?: 'SpreadCard';
  reversed: CelticCross;
  upright: CelticCross;
};

export type SpreadCardInput = {
  reversed: CelticCrossInput;
  upright: CelticCrossInput;
};

export type SpreadInput = {
  cards: Array<SpreadCardInput>;
  displayName: Scalars['String']['input'];
  name: Scalars['String']['input'];
  positions: Array<Scalars['ID']['input']>;
};

export type SpreadPosition = {
  __typename?: 'SpreadPosition';
  description: Scalars['String']['output'];
  displayName: Scalars['String']['output'];
  name: Scalars['String']['output'];
};

export type Suite = {
  __typename?: 'Suite';
  dominion?: Maybe<Scalars['String']['output']>;
  element: Scalars['String']['output'];
  name: Scalars['String']['output'];
  zodiac: Array<Scalars['String']['output']>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;



/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  AvatarImage: ResolverTypeWrapper<AvatarImage>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']['output']>;
  Card: ResolverTypeWrapper<Card>;
  CelticCross: ResolverTypeWrapper<CelticCross>;
  CelticCrossInput: CelticCrossInput;
  ID: ResolverTypeWrapper<Scalars['ID']['output']>;
  Int: ResolverTypeWrapper<Scalars['Int']['output']>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Spread: ResolverTypeWrapper<Spread>;
  SpreadCard: ResolverTypeWrapper<SpreadCard>;
  SpreadCardInput: SpreadCardInput;
  SpreadInput: SpreadInput;
  SpreadPosition: ResolverTypeWrapper<SpreadPosition>;
  String: ResolverTypeWrapper<Scalars['String']['output']>;
  Suite: ResolverTypeWrapper<Suite>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  AvatarImage: AvatarImage;
  Boolean: Scalars['Boolean']['output'];
  Card: Card;
  CelticCross: CelticCross;
  CelticCrossInput: CelticCrossInput;
  ID: Scalars['ID']['output'];
  Int: Scalars['Int']['output'];
  Mutation: {};
  Query: {};
  Spread: Spread;
  SpreadCard: SpreadCard;
  SpreadCardInput: SpreadCardInput;
  SpreadInput: SpreadInput;
  SpreadPosition: SpreadPosition;
  String: Scalars['String']['output'];
  Suite: Suite;
};

export type AvatarImageResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['AvatarImage'] = ResolversParentTypes['AvatarImage']> = {
  thumbnail?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CardResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Card'] = ResolversParentTypes['Card']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  image?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  index?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  keywords?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  numeral?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  reversedKeywords?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  title?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  type?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type CelticCrossResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['CelticCross'] = ResolversParentTypes['CelticCross']> = {
  challenge?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  crowns?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  future?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hope?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  influences?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  outcome?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  past?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  root?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  self?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  situation?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type MutationResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = {
  addSpread?: Resolver<ResolversTypes['Spread'], ParentType, ContextType, RequireFields<MutationAddSpreadArgs, 'spread'>>;
};

export type QueryResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = {
  avatarImages?: Resolver<Array<ResolversTypes['AvatarImage']>, ParentType, ContextType>;
  cardsByIndex?: Resolver<Array<ResolversTypes['Card']>, ParentType, ContextType, RequireFields<QueryCardsByIndexArgs, 'indexes'>>;
};

export type SpreadResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Spread'] = ResolversParentTypes['Spread']> = {
  cards?: Resolver<Array<ResolversTypes['SpreadCard']>, ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  positions?: Resolver<Array<ResolversTypes['SpreadPosition']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpreadCardResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SpreadCard'] = ResolversParentTypes['SpreadCard']> = {
  reversed?: Resolver<ResolversTypes['CelticCross'], ParentType, ContextType>;
  upright?: Resolver<ResolversTypes['CelticCross'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SpreadPositionResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['SpreadPosition'] = ResolversParentTypes['SpreadPosition']> = {
  description?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  displayName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type SuiteResolvers<ContextType = DataSourceContext, ParentType extends ResolversParentTypes['Suite'] = ResolversParentTypes['Suite']> = {
  dominion?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  element?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  zodiac?: Resolver<Array<ResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = DataSourceContext> = {
  AvatarImage?: AvatarImageResolvers<ContextType>;
  Card?: CardResolvers<ContextType>;
  CelticCross?: CelticCrossResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Spread?: SpreadResolvers<ContextType>;
  SpreadCard?: SpreadCardResolvers<ContextType>;
  SpreadPosition?: SpreadPositionResolvers<ContextType>;
  Suite?: SuiteResolvers<ContextType>;
};

