// Source Of Truth
export type Permissions =
  | ['CREATE' | 'READ' | 'UPDATE' | 'DELETE', 'CHANGE_NOTIFICATION_FORM']
  | ['CREATE' | 'READ' | 'UPDATE' | 'DELETE' | 'PUBLISH', 'BREAKING_NEWS']
  | [
      (
        | 'CREATE'
        | 'READ'
        | 'UPDATE'
        | 'DELETE'
        | 'COMMENT'
        | 'COMMENT_CRUD'
        | 'SUGGEST'
        | 'SUGGEST_CRUD'
        | 'MARK_COMPLETED'
        | 'PUBLISH'
      ),
      'NEWS_BRIEF'
    ]
  | [
      (
        | 'CREATE'
        | 'READ'
        | 'UPDATE'
        | 'DELETE'
        | 'COMMENT'
        | 'COMMENT_CRUD'
        | 'SUGGEST'
        | 'SUGGEST_CRUD'
        | 'MARK_COMPLETED'
        | 'PUBLISH'
      ),
      'CONSOLIDATED_ALERT'
    ]
  | [
      (
        | 'CREATE'
        | 'READ'
        | 'UPDATE'
        | 'DELETE'
        | 'COMMENT'
        | 'COMMENT_CRUD'
        | 'SUGGEST'
        | 'SUGGEST_CRUD'
        | 'MARK_COMPLETED'
        | 'PUBLISH'
      ),
      'IMMIGRATION_ALERT'
    ]
  | [
      (
        | 'CREATE'
        | 'READ'
        | 'UPDATE'
        | 'DELETE'
        | 'COMMENT'
        | 'COMMENT_CRUD'
        | 'SUGGEST'
        | 'SUGGEST_CRUD'
        | 'MARK_COMPLETED'
        | 'PUBLISH'
      ),
      'WEEKLY_IMMIGRATION_ALERT'
    ]
  | ['CREATE' | 'READ' | 'UPDATE' | 'DELETE', 'SOURCES']
  | ['CREATE' | 'READ' | 'UPDATE' | 'DELETE', 'REFERENCES']
  | ['READ', 'ANALYTICS_DASHBOARD']
  | ['CREATE' | 'READ' | 'UPDATE' | 'DELETE', 'DATASETS_MANAGEMENT']
  | ['CREATE' | 'READ' | 'UPDATE' | 'DELETE', 'USER_MANAGEMENT'];

export type Rule = DefineRule<Permissions>;
// export type PermissionsSubjects = Permissions[1];
// export type PermissionsSubjectActions<S extends PermissionsSubjects> = Extract<
//   Permissions,
//   { 1: S }
// >[0];
// <<<<<<<<<<<< User Management
interface VMRuleTemplate<A extends string, S extends string> {
  id: S;
  name: string;
  actions: {
    id: A;
    name: string;
    value: boolean;
  }[];
}
type VMRule = DefineRule<Permissions, 'VM'>;
// >>>>>>>>>>>>

// Define rule based on unions and create rule based on VM or not.
interface RuleTemplate<A extends string, S extends string> {
  action: A[];
  subject: S;
}
type CreateRule<
  A extends string,
  S extends string,
  VM extends string = 'VM'
> = VM extends 'VM' ? VMRuleTemplate<A, S> : RuleTemplate<A, S>;
type DefineRule<
  T extends [string, string],
  VM extends string = ''
> = T extends [string, string] ? CreateRule<T[0], T[1], VM> : unknown;
